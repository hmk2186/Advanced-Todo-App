
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./General.css";

import TodoForm from "./components/TodoForm";
import SearchFilter from "./components/SearchFilter";
import TodoList from "./components/TodoList";
import Actions from "./components/Actions";

import { LuClipboardPenLine } from "react-icons/lu";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");
  let [editId, setEditId] = useState(null);
  let [filter, setFilter] = useState("All");
  let [search, setSearch] = useState("");
  let [dateTime, setDateTime] = useState("");
  let [priority, setPriority] = useState("low");
  let [category, setCategory] = useState("work");

  let [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  let addNewTask = () => {
    if (newTodo.trim() === "") {
      alert("Task can't be empty");
      return;
    }

    if (editId !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId
            ? {
                ...todo,
                task: newTodo,
                dateTime: dateTime,
                priority: priority,
                category: category,
              }
            : todo,
        ),
      );
      setEditId(null);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          task: newTodo,
          id: uuidv4(),
          isDone: false,
          dateTime: dateTime,
          priority: priority,
          category: category,
        },
      ]);
    }

    setNewTodo("");
    setDateTime("");
    setPriority("low");
    setCategory("work");
  };

  let updateTodoValue = (event) => setNewTodo(event.target.value);
  let updateDateTime = (event) => setDateTime(event.target.value);
  let setTaskPriority = (event) => setPriority(event.target.value);
  let setTaskCategory = (event) => setCategory(event.target.value);
  let searchTodoTask = (event) => setSearch(event.target.value);

  let deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let MarkAsDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  let MarkAllDone = () => {
    setTodos((todos) =>
      todos.map((todo) => ({ ...todo, isDone: true }))
    );
  };

  let editTask = (todo) => {
    setNewTodo(todo.task);
    setEditId(todo.id);
    setDateTime(todo.dateTime);
    setPriority(todo.priority);
    setCategory(todo.category);
  };

  let filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.isDone === true;
    if (filter === "Active") return todo.isDone === false;
    return true;
  });

  let finalTodos = filteredTodos.filter((todo) => {
    if (search === "") return true;
    return todo.task.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen m-0 p-0 bg-[#e2e8f0] dark:bg-[#0f172a] text-black dark:text-white transition-all duration-300">

      {/* ✅ Header with toggle */}
      <div className="flex items-center justify-between px-4 bg-blue-200 dark:bg-[#1e293b] py-2 shadow-md">

        {/* Left */}
        <div className="flex items-center justify-center gap-2 mx-auto">
          <LuClipboardPenLine className="text-xl" />
          <h3 className="text-xl font-semibold">To-Do List</h3>
        </div>

        {/* Right (Toggle) */}
        <button
          onClick={() => setDark(!dark)}
          className="text-xl p-2 rounded-full bg-white dark:bg-[#0f172a] shadow-md"
        >
          {dark ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>

      {/* Form */}
      <TodoForm
        {...{
          newTodo,
          updateTodoValue,
          dateTime,
          updateDateTime,
          priority,
          setTaskPriority,
          category,
          setTaskCategory,
          addNewTask,
          editId,
        }}
      />

      {/* Title */}
      <h3 className="text-center my-2 text-xl font-semibold border p-2 w-40 rounded-xl mt-4 mx-auto bg-blue-200 dark:bg-[#1e293b] shadow-md">
        Your Todos
      </h3>

      <SearchFilter {...{ search, searchTodoTask, setFilter }} />

      <TodoList
        {...{
          finalTodos,
          deleteTask,
          MarkAsDone,
          editTask,
        }}
      />

      <Actions MarkAllDone={MarkAllDone} />
    </div>
  );
}

