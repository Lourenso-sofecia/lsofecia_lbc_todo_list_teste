
import React from "react";

interface Props {
  count?: number;
}

const Skeleton: React.FC<Props> = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, id) => (
        <div className="skeleton-item" key={id}>
          <div className="skeleton-checkbox" />
          <div className="skeleton-text" />
        </div>
      ))}
    </>
  );
};

export default Skeleton;
