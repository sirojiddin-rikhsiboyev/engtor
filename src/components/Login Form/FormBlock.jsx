import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { googleSignIn } from "../../utils/firebaseAuth";
import { useNavigate } from "react-router";

const FormBlock = ({ title, bottomTitle, bottomText, url, to, children }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="container flex-1 mx-8 md:mx-40 lg:mx-24">
          <h2 className="mt-20 mb-4 uk-text-dark font-semibold text-3xl">
            {title}
          </h2>
          {children}
          {bottomTitle && (
            <Fragment>
              <p className="my-3 text-gray-400 text-sm text-center">
                Easy {bottomTitle} with
              </p>
              <div className="grid gap-4">
                <div>
                  <button
                    className="w-full uk-button uk-button-default uk-button-google rounded normal-case border-gray-300 font-semibold hover:bg-blue-50 transition ease-in-out duration-200"
                    onClick={() => {
                      googleSignIn().then(() => {
                        navigate("/beginner");
                      });
                    }}
                  ></button>
                </div>

                {/* <div>
                  <button
                    className="w-full uk-button uk-button-default uk-button-facebook rounded normal-case border-gray-300 font-semibold hover:bg-blue-50 transition ease-in-out duration-200"
                    onClick={() => {
                      facebookSignIn().then(() => {
                        navigate("/beginner");
                      });
                    }}
                  ></button>
                </div> */}
              </div>
            </Fragment>
          )}
          <p className="my-4 uk-text-dark text-sm text-center">
            {bottomText}
            <NavLink to={url} className="pl-1 font-semibold text-blue-600">
              {to}
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;
