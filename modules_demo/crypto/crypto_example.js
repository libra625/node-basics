const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('Виведіть отриманий хеш у консоль').digest('hex');
console.log('Хеш:', hash);
