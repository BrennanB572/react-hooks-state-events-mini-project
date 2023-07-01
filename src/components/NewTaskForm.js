import React from "react";

function NewTaskForm({ categories, newText, newCategory, setNewTask, onTaskFormSubmit }) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newText} onChange={(e) => setNewTask({ category: newCategory, text: e.target.value})} />
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={(e) => setNewTask({text: newText, category: e.target.value })}>
          {
           categories.filter(category => category !== "All").map((category) => <option key={category}>{category}</option>)

          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
