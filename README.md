# node-basics
## <center> ДЗ 20. Велке ДЗ </center>

### Створіть власний модуль та імпортуйте його

* Створіть файл myMath.js, у якому опишіть дві функції: множення та ділення двох чисел.

* Експортуйте ці функції (через module.exports).

* У файлі main.js за допомогою require() імпортуйте ваш модуль та викличте кожну з функцій, передаючи їм довільні числа.

* Виведіть результат у консоль.

### Практика з вбудованим модулем fs

* Створіть новий файл fs_practice.js.

* Прочитайте вміст будь-якого текстового файлу (наприклад, створіть readme.txt) за допомогою fs.readFile.

* Виведіть прочитаний текст у консоль.

* Запишіть якийсь рядок у новий файл result.txt за допомогою fs.writeFile.

* Перевірте, чи існує файл result.txt (використайте fs.existsSync), і виведіть результат у консоль.

### Робота з директоріями через fs

* У тому ж файлі fs_practice.js створіть папку testFolder (функція fs.mkdir).

* Запустіть код і переконайтеся, що папка створена.

* Додайте перевірку, якщо папка вже існує — виведіть відповідне повідомлення.

### Використання модуля path

* Створіть файл path_practice.js.

* Створіть змінну з відносним шляхом до будь-якого файлу, наприклад: 'folder/../folder/file.txt'.

* Використайте path.normalize, щоб “вирівняти” цей шлях, і виведіть результат у консоль.

* Використайте path.extname, щоб визначити розширення файлу (наприклад, 'example.txt'), і виведіть його у консоль.

### Отримання інформації про систему за допомогою os

* Створіть файл os_practice.js.

* Виведіть у консоль:

* Платформу операційної системи (os.platform())

* Загальний обсяг пам’яті (os.totalmem())

* Вільну пам’ять (os.freemem())

* Час роботи системи у секундах (os.uptime())

### Створення простого HTTP-сервера

* Створіть файл server.js.

* Імпортуйте модуль http.

* Створіть сервер, який повертає у відповідь текст "hello, Node.js!".

* Запустіть сервер на порту 3000 і перевірте роботу, перейшовши за адресою http://localhost:3000.

### Робота з подіями через events

* Створіть файл events_example.js.

* Імпортуйте events та створіть об’єкт EventEmitter.

* Додайте обробник події greet, який у консоль виводить "Привіт, <ім’я>!".

* Згенеруйте (emit) подію greet з довільним ім’ям та перевірте результат.

### Хешування даних через crypto

* Створіть файл crypto_example.js.

* Імпортуйте crypto та створіть хеш для довільного рядка, використовуючи алгоритм sha256.

* Виведіть отриманий хеш у консоль.

### Розбір URL за допомогою url

* Створіть файл url_example.js.

* Імпортуйте url (або використайте клас URL).

* Розберіть довільну URL-адресу (наприклад, https://example.com/path?name=Node.js).

* Виведіть у консоль окремо протокол, шлях і параметр name.

### Додаткове (за бажанням): створення власної структури проєкту

* Створіть папку modules_demo, куди розмістіть усі створені файли.

* Налаштуйте окремо папку для кожного прикладу (fs, path, http тощо), щоб краще організувати код.

* Перевірте роботу всіх прикладів і переконайтеся, що імпортуєте коректні шляхи (відносні чи абсолютні) при потребі.
