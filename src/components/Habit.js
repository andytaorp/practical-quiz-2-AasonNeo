import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li>
      <label
        style={{ textDecoration: habit.completed ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={habit.completed}
          onChange={() => onToggleHabit(habit.id)}
        />
        {habit.name}
      </label>
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
}

