import React, { useState } from "react";
import { useItem } from "./context/ItemContext";

const Form = () => {
 
  const [newItemName, setNewItemName] = useState("");
  const {addItem } = useItem()

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName)
    setNewItemName('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit">add item</button>
      </div>
    </form>
  );
};

export default Form;
