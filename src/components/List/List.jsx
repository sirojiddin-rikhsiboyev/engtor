import React, { Fragment, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const List = ({ items, pathName }) => {
  const navigate = useNavigate();
  
  const [selected, setSelected] = useState(`${pathName}/beginner`);

  useEffect(() => {
    setSelected(`${pathName}/beginner`);
  }, [pathName]);

  const handleChange = (e) => {
    navigate(`${pathName}/${e.target.value.toLowerCase()}`);
    setSelected(e.target.value);
  };

  return (
    <Fragment>
      <div className="h-full w-full px-3 py-3 border-r hidden md:block">
        <ul className="list">
          {items.map((name, i) => {
            return (
              <li key={i}>
                <NavLink
                  activeClassName="active"
                  to={`${pathName}/${name.toLowerCase()}`}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-3 md:hidden border-b">
        <div className="uk-form-controls">
          <select
            className="uk-select rounded"
            value={selected}
            onChange={handleChange}
          >
            {items.map((name, i) => {
              return (
                <option key={i} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </Fragment>
  );
};

export default List;
