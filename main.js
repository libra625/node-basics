const { multiply, divide } = require('./modules_demo/math/myMath.js');
const myMath = require('./modules_demo/math/myMath');

console.log('Результат множення: ', multiply(6, 3));
console.log('Результат ділення: ', divide(10, 2));

console.log('Результат множення: ', myMath.multiply(6, 3));
console.log('Результат ділення: ', myMath.divide(10, 2));
