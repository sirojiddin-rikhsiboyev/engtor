import React, { Fragment, useContext } from "react";
import Avatar from "react-avatar";
import { logOut } from "./../../utils/firebaseAuth";
import { useNavigate } from "react-router";
import { Context } from "./../../App";

const Profile = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  
  return (
    <Fragment>
      <div uk-drop="mode: click; boundary: .for-drop;boundary-align: true;pos: bottom-right;animation: uk-animation-slide-right-small; toggle: #profile">
        <div className="uk-card uk-card-body uk-card-default rounded grid p-0">
          <div className="p-3 border-b border-light flex justify-start items-center">
            {user.photoURL ? (
              <Avatar
                size="50"
                src={user.photoURL}
                maxInitials={2}
                textSizeRatio={2.5}
                round
              />
            ) : (
              <Avatar
                size="50"
                name={user.displayName}
                maxInitials={2}
                textSizeRatio={2.5}
                round
              />
            )}

            <div className="grid ml-3">
              <span className="font-bold text-black">{user.displayName}</span>
              <span className="text-sm font-medium">{user.email}</span>
            </div>
          </div>
          <ul className="uk-nav uk-dropdown-nav p-3 font-semibold">
            <li>
              <a
                className="transition ease-in-out duration-200"
                href="##"
                onClick={() => {
                  logOut().then(() => {
                    navigate("/login");
                  });
                }}
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
