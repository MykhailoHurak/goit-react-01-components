import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.querySelector('#root'));

// ==============================================================
// import ReactDOM from 'react-dom';
// import paintings from './paintings.json';

// function Painting({ url, title, authorTag, authorUrl, price }) {
//   // const { url, title, authorTag, authorUrl, price } = props;
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>Автор: <a href={authorUrl}></a>{authorTag}</p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   )
// }

// const painting = paintings[2];

// ReactDOM.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     authorUrl={painting.author.url}
//     authorTag={painting.author.tag}
//     price={painting.price}
//   />,
//   document.querySelector('#root'),
// );

// ==============================================================
// import ReactDOM from 'react-dom';
// import paintings from './paintings.json';

// const data0 = paintings[0];
// const data1 = paintings[1];

// const painting0 = (
//   <div>
//     <img src={data0.url} alt={data0.title} width="200" />
//     <h2>{data0.title}</h2>
//     <p>Автор: <a href={data0.author.url}></a>{data0.author.tag}</p>
//     <p>Цена: {data0.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// const painting1 = (
//   <div>
//     <img src={data1.url} alt={data1.title} width="200" />
//     <h2>{data1.title}</h2>
//     <p>Автор: <a href={data1.author.url}></a>{data1.author.tag}</p>
//     <p>Цена: {data1.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// const elements = (
//   <div>
//     {painting0}
//     {painting1}
//   </div>
// );

// ReactDOM.render(elements, document.querySelector('#root'));

// ==============================================================
// import ReactDOM from 'react-dom';

// const data = {
//   "id": "id-1",
//     "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//     "title": "Feathers. Art abstract",
//     "price": 500,
//     "author": {
//       "tag": "ractapopulous",
//       "url": "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     "quantity": 10
// };

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>Автор: <a href={data.author.url}></a>{data.author.tag}</p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// ReactDOM.render(painting, document.querySelector('#root'));

// ==============================================================
// import ReactDOM from 'react-dom';

// const jsxEl1 = <span>Hello </span>;
// const jsxEl2 = <span>world</span>;

// // const jsxElement = <div>Hello world</div>;
// const jsxElement = <div>
//   {jsxEl1}
//   {jsxEl2}
// </div>;

// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.querySelector('#root'));

// ==============================================================

// import React from 'react';
// import ReactDOM from 'react-dom';

// const el1 = React.createElement('span', { children: 'Hello' });
// const el2 = React.createElement('span', {children: 'world'});

// const element = React.createElement('div', { a: 5, b: 10, children: [el1, ' ', el2] });

// console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

// =============================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
