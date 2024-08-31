import { useState } from "react";
import { useItem } from "./context/ItemContext";

const SingleItem = ({item}) => {
  
  //const [isChecked, setIsChecked] = useState(item.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setIsEditedName] = useState(item.name);
  const { removeItem, editItem, toggleCompletion } = useItem();

  const handleEditClick = () => {
    if (!item.completed) {
      setIsEditing(true);
    }
  };

  const handleSaveClick = () => {
    editItem(item.id, editedName);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setIsEditedName(e.target.value);
  };

  const handleCheckboxChange = () => {
    toggleCompletion(item.id);
  };
  return (
    <div style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleCheckboxChange}
      />

      <input
        type="text"
        value={editedName}
        onChange={handleInputChange}
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
        readOnly={!isEditing}
      />

      <button type="button" onClick={() => removeItem(item.id)}>
        Delete
      </button>

      {isEditing ? (
        <button type="button" onClick={handleSaveClick}>
          Save
        </button>
      ) : (
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};

export default SingleItem;

/**
 * onChange((e) => setIsCompleted(!isChecked))
 */
