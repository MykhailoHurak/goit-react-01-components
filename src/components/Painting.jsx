import PropTypes from 'prop-types';
import imageDefault from './img-default.jpg';

export default function Painting({
    imageUrl = imageDefault,
    title,
    authorTag = "unknown",
    authorUrl,
    price,
    quantity,
}) {
  // const { url, title, authorTag, authorUrl, price } = props;
  return (
    <div>
      <img src={imageUrl} alt={title} width="240" />
      <h2>{title}</h2>
      <p>Автор: <a href={authorUrl}></a>{authorTag}</p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  )
}

Painting.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    authorTag: PropTypes.string,
    authorUrl: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
}