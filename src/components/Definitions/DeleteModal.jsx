import React, { useContext } from "react";
import { Context } from "./../../App";
import { deleteChild } from "./../../utils/firebaseData";

const DeleteModal = ({ url, id, setModal }) => {
  const { user } = useContext(Context);

  const deleteItem = () => {
    deleteChild(`engtor/${user.uid}/definitions/${url}`, id).then(() => {
      setModal(false);
    });
  };

  return (
    <div className="bg-white w-auto">
      <div className="p-6 flex items-center">
        <span className="fad fa-2x fa-exclamation-triangle text-red-500 pr-6"></span>
        <div>
          <h2 className="text-lg font-semibold">Delete Item</h2>
          <p>Are you sure you want to delete this item?</p>
        </div>
      </div>
      <div className="text-right p-6 border-t">
        <button
          onClick={() => {
            setModal(false);
          }}
          type="button"
          className="uk-modal-close h-8 mr-4 bg-white uk-text-dark text-sm font-semibold px-2 w-28 rounded border hover:bg-gray-100 transition ease-in-out duration-200"
        >
          Cancel
        </button>

        <button
          onClick={deleteItem}
          type="button"
          className="h-8 bg-red-600 text-white text-sm font-semibold px-2 w-28 rounded hover:bg-red-700 transition ease-in-out duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
