import { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onToggleItem, setItem }) {
  const [sortItem, setSortItem] = useState("input");

  let sortedItems;

  if (sortItem === "input") {
    sortedItems = items;
  } else if (sortItem === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortItem === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  function handleReset() {
    const confirmed = window.confirm("Are you sure you want to clear all");

    if (confirmed) {
      setItem([]);
      localStorage.setItem("items", JSON.stringify([]));
    }
  }
  return (
    <main>
      <section className="list">
        <ul>
          {sortedItems.map((el) => (
            <Item
              onDeleteItem={onDeleteItem}
              itemObj={el}
              key={el.id}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>

        <section className="action">
          <select
            value={sortItem}
            onChange={(e) => setSortItem(e.target.value)}
          >
            <option value="input">Sort by Input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={handleReset}> Clear</button>
        </section>
      </section>
    </main>
  );
}
PackingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
  setItem: PropTypes.func,
};
