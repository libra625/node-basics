const path = require('path');

const relativePath = './../Math/../Math/myMath.js';

const normalizedPath = path.normalize(relativePath);

console.log('Вирівняний шлях:', normalizedPath);

console.log('Розширення файлу:', path.extname(normalizedPath));
