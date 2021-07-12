import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [newItemObj, setNewItemObj] = useState({
    name: '',
    category: 'Produce',
    key: uuid(),
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    onItemFormSubmit(newItemObj)

    setNewItemObj({
      name: '',
      category: 'Produce',
      key: uuid(),
    })

  }

  const handleNewItemChange = (event) => {
    
    // console.log(event.target.name)
    let keyName = event.target.name
    let value = event.target.value

    console.log(keyName, value)

    setNewItemObj({
      ...newItemObj,

      [keyName]: value
    })
  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleNewItemChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleNewItemChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
