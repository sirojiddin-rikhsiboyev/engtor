import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = ({ items }) => {
  return (
    <div className="uk-hidden@m">
      <div className="w-9 h-9 mr-4 rounded-full flex justify-center items-center border border-dark cursor-pointer hover:bg-dark transition ease-in-out duration-200">
        <span className="far fa-bars"></span>
      </div>
      <div className="uk-navbar-dropdown bg-dark-500 right-4 w-auto px-0">
        <ul id="menu" className="grid gap-3 navbar-items-mobile">
          {items.map((el, i) => {
            return (
              <li key={i}>
                <NavLink activeClassName="active" to={el.url}>
                  {el.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
