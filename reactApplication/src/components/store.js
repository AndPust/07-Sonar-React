import PropTypes from 'prop-types';
import Cards from "./card";
import "../styles/store.css";

const Store = ({ handleClick, items }) => {
  return (
    <section>
      {items.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

Store.propTypes = {
  handleClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default Store;
