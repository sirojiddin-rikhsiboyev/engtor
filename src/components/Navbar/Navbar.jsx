import React, { Fragment, useContext } from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchInput from "./SearchInput";
import Avatar from "react-avatar";
import { Context } from "./../../App";
import { NavLink } from "react-router-dom";

const items = [
  {
    name: "Vocabulary",
    url: "/beginner",
  },
  {
    name: "Definitions",
    url: "/definitions/beginner",
  },
];

const Navbar = () => {
  const { user } = useContext(Context);
  return (
    <Fragment>
      <nav className="navbar uk-light" data-uk-navbar="mode: click; dropbar: true">
        <div className="for-drop w-full flex justify-between mx-3 md:mx-6">
          <div className="nav-overlay uk-navbar-left">
            <Menu items={items} />

            <Logo />

            <ul className="navbar-items uk-visible@m">
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

          <div className="nav-overlay uk-navbar-right">
            <div className="mx-3 uk-visible@m">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="uk-search uk-search-default"
              >
                <span data-uk-search-icon></span>
                <input
                  className="search uk-search-input max-h-9 rounded text-sm focus:bg-dark transition ease-in-out duration-200"
                  type="search"
                  placeholder="Search"
                />
              </form>
            </div>
            <div
              className="uk-hidden@m w-9 h-9 mx-3 rounded-full flex justify-center items-center border border-dark cursor-pointer hover:bg-dark transition ease-in-out duration-200"
              data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
            >
              <span className="far fa-search"></span>
            </div>
            <div
              id="profile"
              className="border border-dark rounded-full uk-inline z-10"
            >
              {user.photoURL ? (
                <Avatar
                  size="34"
                  src={user.photoURL}
                  className="cursor-pointer"
                  maxInitials={2}
                  textSizeRatio={2.5}
                  round
                />
              ) : (
                <Avatar
                  size="34"
                  name={user.displayName}
                  className="cursor-pointer"
                  maxInitials={2}
                  textSizeRatio={2.5}
                  round
                />
              )}
            </div>
          </div>

          <SearchInput />
        </div>
      </nav>
      <div className="uk-navbar-dropbar bg-dark-500 uk-hidden@m"></div>
      <Profile />
    </Fragment>
  );
};

export default Navbar;
