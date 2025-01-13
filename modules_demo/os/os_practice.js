const os = require('os');

console.log('Операційна система:', os.platform());

console.log('Загальна пам\'ять:', os.totalmem());
console.log('Вільна пам\'ять:', os.freemem());

console.log('Час роботи системи (секунди):', os.uptime());

console.log('Інформація про процесори:', os.cpus());
