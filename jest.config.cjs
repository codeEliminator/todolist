module.exports = {
  preset: 'ts-jest', // Используем ts-jest для трансформации TypeScript
  testEnvironment: 'jest-environment-jsdom', // Указываем окружение для тестирования DOM
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Поддержка файлов .tsx
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Трансформация TypeScript/TSX файлов
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Заглушка для CSS/SCSS
  },
};
