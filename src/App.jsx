/*

import "./App.css";
import { useState } from "react";
import Form from "./Form";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: Date.now(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (itemId) => {
    //const newItems = items.filter((item) => itemId !== item.id);

    //setItems(newItems);
    setItems((prevItems) => prevItems.filter((item) => itemId !== item.id));
  };

  const editItem = (itemId, newName) => {
    // const newItems = items.map((item) => {
    // if (item.id === itemId) {
    // const newItem = { ...item, name: newName};
    // return newItem;
    // }
    // return item;
    //  });
    // setItems(newItems);

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, name: newName } : item
      )
    );
  };

  const toggleCompletion = (itemId) => {
    // const newItems = items.map((item) => {
    // if (item.id === itemId) {
    //    const newItem = { ...item, completed: !item.completed };
    // return newItem;
    // }
    // return item;
    // });
    // setItems(newItems);
    //

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <>
      <h2>Todo Assignment</h2>
      <Form addItem={addItem} />
      <Items
        items={items}
        removeItem={removeItem}
        editItem={editItem}
        toggleCompletion={toggleCompletion}
      />
    </>
  );
};

export default App;

*/

import "./App.css";
import { useState } from "react";
import {ItemProvider} from "./context/ItemContext"
import Form from "./Form";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: Date.now(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (itemId) => {
    //const newItems = items.filter((item) => itemId !== item.id);

    //setItems(newItems);
    setItems((prevItems) => prevItems.filter((item) => itemId !== item.id));
  };

  const editItem = (itemId, newName) => {
    // const newItems = items.map((item) => {
    // if (item.id === itemId) {
    // const newItem = { ...item, name: newName};
    // return newItem;
    // }
    // return item;
    //  });
    // setItems(newItems);

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, name: newName } : item
      )
    );
  };

  const toggleCompletion = (itemId) => {
    // const newItems = items.map((item) => {
    // if (item.id === itemId) {
    //    const newItem = { ...item, completed: !item.completed };
    // return newItem;
    // }
    // return item;
    // });
    // setItems(newItems);
    //

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <ItemProvider
      value={{ addItem, removeItem, editItem, toggleCompletion, items }}
    >
      <h2>Todo Assignment</h2>
      <Form />
      <Items />
    </ItemProvider>
  );
};

export default App;
