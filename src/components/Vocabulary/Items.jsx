import React, { useState, Fragment } from "react";
import Speech from "speak-tts";
import Modal from "./../Ui/Modal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const ItemsV = ({ id, url, word, translation }) => {
  const [play, setPlay] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const speech = new Speech();
  speech.init({
    volume: 1,
    lang: "en-GB",
    rate: 1,
    pitch: 1,
  });

  const speechPlay = () => {
    speech.speak({
      text: word,
      queue: true,
      listeners: {
        onstart: () => {
          setPlay(true);
        },
        onend: () => {
          setPlay(false);
        },
      },
    });
  };

  const speechStop = () => {
    speech.cancel();
  };

  return (
    <Fragment>
      <div className="flex justify-between px-1 bg-white rounded border mb-3">
        <div className="flex flex-col p-2">
          <span className="font-semibold break-all">{word}</span>
          <span className="font-semibold text-sm break-all">{translation}</span>
        </div>
        <div className="flex">
          <div
            onClick={play ? speechStop : speechPlay}
            data-uk-tooltip={`title: ${play ? "Stop" : "Play"}; pos: bottom`}
            className="h-full cursor-pointer px-2.5 flex items-center text-blue-600"
          >
            <span className={`far ${play ? "fa-stop" : "fa-play"}`}></span>
          </div>
          <div
            onClick={() => {
              setEditModal(true);
            }}
            data-uk-tooltip="title: Edit; pos: bottom"
            className="h-full cursor-pointer px-2.5 flex items-center text-blue-600"
          >
            <span className="far fa-pencil-alt"></span>
          </div>
          <div
            onClick={() => {
              setDeleteModal(true);
            }}
            data-uk-tooltip="title: Remove; pos: bottom"
            className="h-full cursor-pointer px-2.5 flex items-center text-red-500"
          >
            <span className="far fa-trash-alt"></span>
          </div>
        </div>
      </div>

      <Modal visible={editModal} setVisible={setEditModal}>
        <EditModal
          url={url}
          id={id}
          word={word}
          translation={translation}
          setModal={setEditModal}
        />
      </Modal>

      <Modal visible={deleteModal} setVisible={setDeleteModal}>
        <DeleteModal
          url={url}
          id={id}
          setModal={setDeleteModal}
        />
      </Modal>
    </Fragment>
  );
};

export default ItemsV;
