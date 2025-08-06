import React from "react";
import { Dropdown } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
import { PAGE_SIZES } from "../constants/pagination";

interface Props {
  pageSize: number;
  setPageSize: (size: number) => void;
}

const PageSizeSelector: React.FC<Props> = ({ pageSize, setPageSize }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        as="button"
        role="button"
        id="dropdown-custom-toggle"
        className="custom-dropdown-toggle "
      >
        <span>{pageSize}</span>
        <ChevronDown size={16} color="#ADB5BD" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="  ">
        {PAGE_SIZES.map((size) => (
          <Dropdown.Item
            key={size}
            onClick={() => setPageSize(size)}
            className="text-center text-gray-700 px-3 py-2 w-100"
            aria-label={`Selecionar tamanho de página ${size}`}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "16px",
              cursor: "pointer",
            }}
          >
            {size}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default React.memo(PageSizeSelector);
