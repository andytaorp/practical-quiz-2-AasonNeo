import React, { useState } from 'react';

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState(""); // Using useState for state management

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName);
      setHabitName(""); // Reset input field after adding habit
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter a habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}


