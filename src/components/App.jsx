import { useState, useEffect } from "react";

import "../styles/index.css";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { Logo } from "./Logo";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((Items) => {
      const updatedItems = Items.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <>
      <header>
        <Logo />
        <Form onAddItems={handleAddItems} />
      </header>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        setItem={setItems}
      />
      <Stats items={items} />
    </>
  );
}
export default App;
