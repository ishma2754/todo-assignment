import SingleItem from "./SingleItem";
import { useItem } from "./context/ItemContext";

const Items = () => {
  const { items, removeItem, editItem, toggleCompletion } = useItem();
  return (
    <div>
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            key={item.id}
            removeItem={removeItem}
            editItem={editItem}
            toggleCompletion={toggleCompletion}
          />
        );
      })}
    </div>
  );
};

export default Items;
