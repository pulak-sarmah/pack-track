import PropTypes from "prop-types";

export function Item({ itemObj, onDeleteItem, onToggleItem }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={itemObj.packed}
          checked={itemObj.packed}
          onChange={() => {
            onToggleItem(itemObj.id);
          }}
        />
        <span
          style={
            itemObj.packed
              ? { textDecoration: "line-through" }
              : { textDecoration: " " }
          }
        >
          {itemObj.quantity} {itemObj.description}
        </span>
        <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
      </li>
    </>
  );
}
Item.propTypes = {
  itemObj: PropTypes.shape({
    description: PropTypes.string,
    packed: PropTypes.bool,
    quantity: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
};
