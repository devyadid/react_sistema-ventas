const md5 = require('md5');

const password = '12345';
const hashedPassword = md5(password);

console.log('Original Password:', password);
console.log('Hashed Password:', hashedPassword);
