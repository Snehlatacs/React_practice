function TodoItem({ task, index, deleteTask }) {
  return (
    <li>
      {task}
      <button onClick={() => deleteTask(index)}>❌</button>
    </li>
  );
}

export default TodoItem;
