import React from "react";

const Grid = ({ children, ...props }) => {
  return (
    <div {...props} className="grid grid-cols-1 lg:grid-cols-2 select-none">
      {children}
    </div>
  );
};

export default Grid;
