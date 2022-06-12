import React from "react";

const SearchInput = () => {
  return (
    <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
      <div className="uk-navbar-item uk-width-expand px-0">
        <form className="uk-search uk-search-navbar uk-width-1-1">
          <input
            className="search w-full py-4 bg-transparent outline-none text-lg"
            type="text"
            placeholder="Search"
            autoFocus
          />
        </form>
      </div>

      <div
        className="w-9 h-9 ml-4 rounded-full flex justify-center items-center border border-dark cursor-pointer hover:bg-dark transition ease-in-out duration-200"
        data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
      >
        <span className="far fa-times"></span>
      </div>
    </div>
  );
};

export default SearchInput;
