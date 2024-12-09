import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { TasksProvider } from '../../Providers/TasksProvider';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  it('renders initial tasks correctly', () => {
    render(
      <TasksProvider>
        <TodoList />
      </TasksProvider>
    );

    expect(screen.getByText(/items left/i)).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('allows adding a new task', () => {
    render(
      <TasksProvider>
        <TodoList />
      </TasksProvider>
    );

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    const addButton = screen.getByText(/add task/i);

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
    expect(screen.getByText(/1 items left/i)).toBeInTheDocument();
  });

  it('toggles task completion', () => {
    render(
      <TasksProvider>
        <TodoList />
      </TasksProvider>
    );

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    const addButton = screen.getByText(/add task/i);

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(screen.getByText(/0 items left/i)).toBeInTheDocument();
  });

  it('filters tasks correctly', () => {
    render(
      <TasksProvider>
        <TodoList />
      </TasksProvider>
    );

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    const addButton = screen.getByText(/add task/i);

    // Add 2 tasks
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    // Mark first task as completed
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    // Filter Active
    fireEvent.click(screen.getByText('Active'));
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    // Filter Completed
    fireEvent.click(screen.getByText('Completed'));
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();

    // Filter All
    fireEvent.click(screen.getByText('All'));
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('clears completed tasks', () => {
    render(
      <TasksProvider>
        <TodoList />
      </TasksProvider>
    );

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    const addButton = screen.getByText(/add task/i);

    // Add 2 tasks
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    // Mark first task as completed
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    // Clear completed
    fireEvent.click(screen.getByText(/clear completed/i));
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});
