## Тестовое задание "Управление лампами"

### Описание клиентской части
При создании использовался react.js, react-bootstrap
Клиентская часть имеет 2 раздела:
* Панель администратора
![Alt text](/screens/adminpanel.png)
* Панель для управления лампами обычными пользователями
![Alt text](/screens/1.png)
Панель администратора доступна только администратору,
панель управления доступна только обычному пользователю.

При попытке доступа к любой панели происходит запрос ввода логина/пароля, затем происходит переадресация на соответсвующую панель(react-router-dom).

В панели администратора происходит создание новой точки установки лампы, где есть возможность выбрать модель лампы из существующих, либо указать название новой модели. Адрес лампы являяется ее уникальным идентификатором, все изменения будут применяться к адресу (SQL REPLACE). 

В панели пользователя выводятся все доступные лампы с указанием адресов и checkbox для переключения состояния.

##Серверная часть (Node.js)

Сервер отдает по запросу скомпилированное SPA и ожидает запросов на обмен данными.
Авторизация осуществляется при помощи токена JWT, который подписывается сервером и устанавливается его время жизни, по истечению которого от пользователя требуется заново ввести пару логин/пароль. Пароли пользователей хранятся в базе данных в зашифрованном виде.
Сервер принимает запросы от клиента и выдает информацию клиенту только если токен валиден (auth middleware), тем самым исключена выдача информации путем использования API вне приложения без валидного токена.

API сервера условно разделено на две части - обработчики запросов и методы работы с базой данных.

При выполнении запросов реализована защита от SQL Injection (mysql2.js - параметрируемые запросы)

