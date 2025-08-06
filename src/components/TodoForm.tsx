import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { showCustomToast } from "./showCustomToast";

interface Props {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
    showCustomToast({ message: "Tarefa Adicionada" });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className=" d-flex align-items-center py-2 w-100"
      role="form"
    >
      <div className="d-flex w-100">
        <Form.Control
          aria-label="Nova tarefa"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="me-2 flex-grow-1 custom-input"
        />
        <Button
          type="submit"
          disabled={!input.trim()}
          className="px-3  text-nowrap "
          aria-label="Adicionar tarefa"
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "#067B95",
            borderColor: "#067B95",
          }}
        >
          Adicionar Tarefa
        </Button>
      </div>
    </Form>
  );
};

export default React.memo(TodoForm);
