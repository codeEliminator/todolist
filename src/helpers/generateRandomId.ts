export function generateRandomId() {
    let result = ''
    while (result.length < 21) 
        result += Math.random().toString(36).substring(2);
    return result;
};