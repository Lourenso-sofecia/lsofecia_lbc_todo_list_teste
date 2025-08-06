import React from "react";

const EmptyList: React.FC<{ message?: string }> = ({
  message = "Nenhuma tarefa encontrada.",
}) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center my-5"
      style={{
        minHeight: "150px",
        color: "#6c757d",
        fontSize: "1.25rem",
        fontStyle: "italic",
      }}
      role="alert"
      aria-live="polite"
    >
      <p className="mb-0">{message}</p>
    </div>
  );
};

export default EmptyList;
