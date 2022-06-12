import React, { Fragment, useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "./../App";
import { useSearch } from "../hooks/useSearch";
import { getToList } from "./../utils/firebaseData";
import { getToSearch } from "../utils/consts";
import Items from "./../components/Definitions/Items";
import CreateForm from "./../components/Definitions/CreateForm";
import CreateModal from "./../components/Definitions/CreateModal";
import Modal from "./../components/Ui/Modal";

const Definitions = () => {
  const { user } = useContext(Context);
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date");
  const [definitions, setDefinitions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    getToList(
      `engtor/${user.uid}/definitions/${id}`,
      setDefinitions,
      setIsLoaded
    );
  }, [id, user]);

  getToSearch(setSearch);

  const data = useSearch(definitions, "definition", sort, search);

  return (
    <Fragment>
      <div className="p-3 w-full md:w-3/4 h-init">
        <div className="relative">
          <div className="hidden md:flex justify-between items-center mb-4">
            <h2 className="capitalize text-xl font-semibold uk-text-dark">
              {id}
            </h2>
            {definitions.length > 0 && (
              <div className="uk-inline">
                <button
                  className="h-8 bg-white uk-text-dark text-sm font-semibold px-2 rounded border"
                  type="button"
                >
                  <span className="flex justify-between items-center w-20">
                    Sorting
                    <span className="far fa-chevron-down"></span>
                  </span>
                </button>
                <div data-uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li>
                      <a
                        onClick={() => {
                          setSort("date");
                        }}
                        href="#date"
                      >
                        By Date
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setSort("definition");
                        }}
                        href="#alphabetically"
                      >
                        Alphabetically
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          {!isLoaded ? (
            <div>
              {definitions.length ? (
                data.map((el) => {
                  return (
                    <Items
                      key={el.id}
                      url={id}
                      id={el.id}
                      definition={el.definition}
                    />
                  );
                })
              ) : (
                <div className="text-lg">The list is empty</div>
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center h-loader">
              <div data-uk-spinner="ratio: 3"></div>
            </div>
          )}
          <div
            onClick={() => {
              setAddModal(true);
            }}
            className="fixed flex justify-center items-center text-white bottom-0 right-0 m-3 bg-blue-600 w-16 h-16 rounded-full hover:bg-blue-700 transition ease-in-out duration-200 cursor-pointer uk-box-shadow-medium md:hidden"
          >
            <span className="fal fa-2x fa-plus"></span>
          </div>
        </div>

        <CreateForm url={id} />
      </div>

      <Modal visible={addModal} setVisible={setAddModal}>
        <CreateModal url={id} setModal={setAddModal} />
      </Modal>
    </Fragment>
  );
};

export default Definitions;
