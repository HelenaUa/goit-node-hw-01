Cкриншот результата выполнения каждой команды:

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list : https://monosnap.com/file/lqVBT85w0kKRdXiZtIjyjXdo0XByR5

# Получаем контакт по id

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6 : https://monosnap.com/file/kNrBwsQTd4DeDOvdOCneGfZbcpnOV1

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22 :
https://monosnap.com/file/L3PvACK8knSECsUx2cSJ9WN60WZhE0

# Удаляем контакт

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH : https://monosnap.com/file/qwStRoRQOW37qSmpT3FdXWOYKN9xsE
