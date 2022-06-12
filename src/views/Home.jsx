import React, { Fragment, useContext } from "react";
import { Navigate, Outlet, useOutlet } from "react-router";
import { Context } from "./../App";
import Navbar from "../components/Navbar/Navbar";
import List from "../components/List/List";

const items = [
  "Beginner",
  "Elementary",
  "Pre-Intermediate",
  "Intermediate",
  "Upper-Intermediate",
  "Advanced",
  "Proficiency",
];

const Home = () => {
  const { user, loading } = useContext(Context);
  const { props } = useOutlet();
  const pathName = props.value.pathname;
  return !loading ? (
    user ? (
      <Fragment>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-4 md:bg-light-500">
          <div data-uk-height-viewport="expand: true">
            <List items={items} pathName={pathName} />
          </div>

          <div className="md:col-span-3 relative bg-light-500 flex flex-col items-center">
            <Outlet />
          </div>
        </div>
      </Fragment>
    ) : (
      <Navigate to="/login" />
    )
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div data-uk-spinner="ratio: 3"></div>
    </div>
  );
};

export default Home;
