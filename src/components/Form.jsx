import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !select) return;

    const newItem = {
      id: uuidv4(),
      description: description,
      quantity: select,
      packed: false,
    };
    onAddItems(newItem);

    setDescription("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={select} onChange={(e) => setSelect(+e.target.value)}>
        <option disabled>Select Quantity</option>
        {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <button>Add</button>
    </form>
  );
}
Form.propTypes = {
  onAddItems: PropTypes.func.isRequired,
};
