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
      <p>Автор: <a href={authorUrl}>{authorTag}</a></p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  )
}

Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorTag: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}