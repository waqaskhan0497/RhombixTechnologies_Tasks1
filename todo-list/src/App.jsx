import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tasks")) || []; }
    catch { return []; }
  });
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks]);

  const submit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    if (editingId) {
      setTasks(tasks.map(t => t.id === editingId ? { ...t, text: value } : t));
      setEditingId(null);
    } else {
      setTasks([{ id: Date.now(), text: value, completed: false }, ...tasks]);
    }
    setText("");
  };

  const editTask = (task) => {
    setText(task.text);
    setEditingId(task.id);
  };

  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  const clearCompleted = () => setTasks(tasks.filter(t => !t.completed));

  const visible = tasks.filter(t => filter === "all" || filter === "active" ? filter === "all" || !t.completed : t.completed);
  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <main className="app">
      <section className="todo">
        <div className="heading">
          <div><p>PRODUCTIVE DAY</p><h1>My Tasks</h1></div>
          <span>{activeCount} active</span>
        </div>

        <form onSubmit={submit}>
          <input value={text} onChange={e => setText(e.target.value)} placeholder="What needs to be done?" />
          <button>{editingId ? "Update" : "Add Task"}</button>
        </form>

        <div className="filters">
          {["all", "active", "completed"].map(item => (
            <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button className="clear" onClick={clearCompleted}>Clear completed</button>
        </div>

        <div className="list">
          {visible.length === 0 && <p className="empty">No tasks here. Add a new task!</p>}
          {visible.map(task => (
            <article className="task" key={task.id}>
              <button className={"check " + (task.completed ? "done" : "")} onClick={() => toggleTask(task.id)}>
                {task.completed ? "✓" : ""}
              </button>
              <p className={task.completed ? "completed" : ""}>{task.text}</p>
              <div className="actions">
                <button onClick={() => editTask(task)}>Edit</button>
                <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}