import { createContext, useContext } from "react";

export const ItemContext = createContext({
  Items: [
    {
      id: 1,
      name: "hello",
      completed: false,
    },
  ],
  addItem: (itemName) => {},
  editItem: (itemId, newName) => {},
  removeItem: (itemId) => {},
  toggleCompletion: (itemId) => {},
});

export const useItem = () => {
  return useContext(ItemContext)
}

export const ItemProvider = ItemContext.Provider