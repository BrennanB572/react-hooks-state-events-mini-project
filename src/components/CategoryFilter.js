import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  function onDelete(category){
    setSelectedCategory(category)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) =>
      <button onClick={() => onDelete(category)} key={category} className={selectedCategory === category ? "selected" : ""}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;