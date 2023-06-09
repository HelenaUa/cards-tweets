# Cards-tweets

Цей проект було створено за допомогою
[Create React App](https://github.com/facebook/create-react-app).

## Мета

Створити картки твітів та додати інтерактивності при клікові на кнопку згідно з
технічним завданням.

### Що зроблено

1. Картки юзера реалізовані відповідно макету.
2. При клікові на кнопку Follow - текст змінюється на Following. Також
   змінюється колір кнопки. А до кількості фоловерів додається 1 follower. При
   повторному клікові на кнопку її текст та колір змінюються до початкового
   стану, змінюється і кількість фоловерів. Вона зменшується на 1.
3. В коді цифра 100,500 прописана одним значенням (100500). В UI - виведено
   через кому (100,500).
4. Зроблена пагінація. На одній сторінці пагінації відображається 3 твіти, решта
   завантажується при натисканні Load More (максимум 15 юзерів).
5. Створена маршрутизація. Якщо користувач зайшов за неіснуючим маршрутом, його
   перенаправлено на домашню сторінку. '/' – Home, домашня сторінка. '/tweets' -
   Тweets, сторінка із відображенням твітів. На сторінці Тweets є кнопка Back,
   яка веде на головну сторінку.

#### Як це зроблено

1. Робота виконана на React.
2. Персональний бекенд для розробки створен за допомогою UI-сервісу mockapi.io
   (ресурс users).
3. Для запиту на бекенд використовується біліотека axios.
4. Для маршрутизації використовується React Router.
