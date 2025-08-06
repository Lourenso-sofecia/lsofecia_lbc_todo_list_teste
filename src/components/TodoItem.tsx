import React from "react";
import { Button, Form } from "react-bootstrap";
import { Todo } from "../types/Todo";
import { formatDate } from "../utils/formatDate";
import toast from "react-hot-toast";
import { showCustomToast } from "./showCustomToast";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <tr className="align-middle ">
      <td colSpan={5} className="border-0">
        <div className="d-flex align-items-start gap-2">
          <Form.Check
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              onToggle(todo.id);
              if (!todo.completed) {
                showCustomToast({ message: "Tarefa concluída" });
              }
            }}
            aria-label={`Marcar como ${
              todo.completed ? "pendente" : "concluída"
            }`}
          />
          <p
            className="m-0 p-0"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#6c757d" : "inherit",
            }}
          >
            {todo.text}
          </p>
          {todo.completed && (
            <span className="badge  rounded-pill bg-success px-3 py-2">
              Concluída
            </span>
          )}
        </div>
      </td>
      <td className="border-0">{formatDate(todo.createdAt)}</td>
      <td className="border-0">{formatDate(todo.completedAt)}</td>
      <td colSpan={2} className="border-0 p-0">
        <Button
          variant="soft"
          color="danger"
          onClick={() => {
            showCustomToast({ message: "Tarefa excluída" });
            onDelete(todo.id);
          }}
          aria-label="Excluir tarefa"
          className="px-3 my-2 mx-2"
          style={{
            paddingTop: "12px",
            paddingBottom: "12px",
            color: "#dc3545",
            backgroundColor: "#f8d7da",
          }}
        >
          Excluir
        </Button>
      </td>
    </tr>
  );
};

export default React.memo(TodoItem);
