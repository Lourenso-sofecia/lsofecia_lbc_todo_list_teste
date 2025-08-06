import React from "react";
import { Table } from "react-bootstrap";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";
import EmptyList from "./EmptyList";

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggle, onDelete }) => (
  <Table
    bordered
    hover
    responsive
    aria-label="Tabela de tarefas pendentes"
    className=" w-100"
  >
    <thead>
      <tr
        style={{
          borderBottom: "2px solid #bebebe",
        }}
      >
        <th className="border-0 text-nowrap" colSpan={5}>
          Tarefa
        </th>
        <th className="border-0 text-nowrap">Data de Criação</th>
        <th className="border-0 text-nowrap">Data de conclusão</th>
        <th
          className="border-0 text-nowrap"
          colSpan={2}
          aria-description="Ações"
        ></th>
      </tr>
    </thead>
    <tbody>
      {todos.length === 0 ? (
        <tr>
          <td colSpan={7} className=" border-0 text-center">
            <EmptyList />
          </td>
        </tr>
      ) : (
        <>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </>
      )}
    </tbody>
  </Table>
);

export default React.memo(TodoList);
