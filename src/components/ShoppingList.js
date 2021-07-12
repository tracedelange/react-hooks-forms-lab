import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");


  //add state to keep track of search input

  const [filterInput, setFilterInput] = useState('');

  function handleFilterInputChange(event) {

    setFilterInput(event.target.value);

  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const itemsToDisplay = items.filter((item) => {

    let length = filterInput.length

    if (selectedCategory === "All" && (item.name).slice(0, length) === filterInput) return true;

    return (item.category === selectedCategory && (item.name).slice(0, length) === filterInput);

  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter onFilterInputChange={handleFilterInputChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
