import ItemCard from './ItemCard';
import PropTypes from 'prop-types';

function ItemsContainer(props) {
  ItemsContainer.propTypes = {
    title: PropTypes.string.isRequired,
  };
  const title = props.title;

  return (
    <>
      <div className="items-container">
        <h1 className="main-heading">{title}</h1>
        <div className="items">
          <ItemCard />
          <div className="divider"></div>
          <ItemCard />
          <div className="divider"></div>
          <ItemCard />
        </div>
      </div>
    </>
  );
}

export default ItemsContainer;
