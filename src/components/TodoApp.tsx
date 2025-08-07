import React, { useState, useMemo, useCallback, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import PageSizeSelector from "./PageSizeSelector";
import PaginationControl from "./PaginationControl";
import { Todo } from "../types/Todo";
import { LOCAL_STORAGE_KEY, PAGE_SIZES } from "../constants/pagination";
import TodoSkeleton from "./Skeleton";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        console.error("Erro ao carregar tarefas do localStorage.");
      }
    }
    return [];
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[7]);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(todos.length / pageSize);

  const paginatedTodos = useMemo(() => {
    const start = (page - 1) * pageSize;
    return todos.slice(start, start + pageSize);
  }, [todos, page, pageSize]);

  const handleAdd = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const handleDelete = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: todo.completed ? null : new Date().toISOString(),
            }
          : todo
      )
    );
  }, []);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages === 0 ? 1 : totalPages);
    }
  }, [page, totalPages]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className=" container d-flex flex-column align-items-start justify-content-start w-100 gap-3 p-3 "
      role="main"
      aria-label="Lista de tarefas"
      style={{
        borderTop: "10px solid #17A2B8",
        borderLeft: "1px solid #dee2e6",
        borderRight: "1px solid #dee2e6",
        borderBottom: "1px solid #dee2e6",
        borderRadius: "18px",
      }}
    >
      <h1 className="fw-bold text-dark" tabIndex={0}>
        As minhas tarefas
      </h1>

      <section
        className="d-flex flex-column flex-lg-row  align-items-start align-items-lg-center justify-content-lg-between w-100 gap-lg-5 gap-3"
        style={{}}
      >
        <article className="w-100 w-md-auto">
          <p className="m-0 text-secondary"> Descrição da tarefa:</p>
          <TodoForm onAdd={handleAdd} />
        </article>

        <article
          className="d-flex flex-row align-items-center justify-content-between w-md-auto"
          style={{ flexShrink: 0 }}
        >
          <div className="mt-3 d-flex flex-row align-items-center justify-content-center gap-2">
            <div>
              Página {page} de {totalPages === 0 ? 1 : totalPages}
            </div>
            <PaginationControl
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
            <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
          </div>
        </article>
      </section>

      <section className="d-flex flex-column w-100 h-100">
        <div className="flex-grow-1 overflow-auto">
          {loading ? (
            <TodoSkeleton count={pageSize} />
          ) : (
            <TodoList
              todos={paginatedTodos}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </div>
      </section>

      <section className="d-flex justify-content-between align-items-center mb-3 w-100">
        <span style={{ flexShrink: 0 }}>Total de tarefas: {todos.length}</span>
        <div className="d-flex gap-2 justify-content-end w-100">
          <PaginationControl
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
          <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
        </div>
      </section>
    </main>
  );
};

export default TodoApp;
