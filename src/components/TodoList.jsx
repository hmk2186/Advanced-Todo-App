import TodoItem from "./TodoItem";

export default function TodoList({
  finalTodos,
  deleteTask,
  MarkAsDone,
  editTask,
}) {
  return (
    <ul>
      {finalTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          MarkAsDone={MarkAsDone}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}