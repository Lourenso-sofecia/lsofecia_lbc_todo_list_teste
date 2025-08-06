import React from "react";
import { Pagination, Button } from "react-bootstrap";

interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const PaginationControl: React.FC<Props> = ({ page, totalPages, setPage }) => {
  // Garantir que totalPages seja no mínimo 1
  const safeTotalPages = Math.max(totalPages, 1);
  const safePage = Math.min(page, safeTotalPages);

  const isDisabled = safeTotalPages <= 1;

  return (
    <div className="d-flex align-items-center gap-2 flex-wrap">
      <Button
        variant="outline-primary"
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={safePage === 1 || isDisabled}
        className=" custom-pagination-button"
        aria-label="Página anterior"
        title="Clique para ir à página anterior"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        Anterior
      </Button>

      <Pagination className="m-0 p-0 custom-pagination d-flex gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i + 1}
            active={page === i + 1}
            onClick={() => setPage(i + 1)}
            aria-label={`Página ${i + 1}`}
          >
            <span
              style={{
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "4px",
                paddingRight: "4px",
              }}
            >
              {i + 1}
            </span>
          </Pagination.Item>
        ))}
        {totalPages === 0 && (
          <div
            className=""
            style={{
              border: "1px solid #ced4da",

              borderRadius: "8px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          >
            1
          </div>
        )}
      </Pagination>

      <Button
        variant="outline-primary"
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={safePage === safeTotalPages || isDisabled}
        className="custom-pagination-button"
        aria-label="Próxima página"
        title="Clique para ir à próxima página"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        Próximo
      </Button>
    </div>
  );
};

export default React.memo(PaginationControl);
