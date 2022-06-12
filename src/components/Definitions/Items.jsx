import React, { useState, Fragment } from "react";
import Speech from "speak-tts";
import Modal from "./../Ui/Modal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const Items = ({ id, url, definition }) => {
  const [play, setPlay] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [readModal, setReadModal] = useState(false);

  const speech = new Speech();
  speech.init({
    volume: 1,
    lang: "en-GB",
    rate: 1,
    pitch: 1,
  });

  const speechPlay = () => {
    speech.speak({
      text: definition,
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
        <div className="p-2 truncate">
          <span className="font-semibold  md:break-all">{definition}</span>
        </div>
        <div className="flex">
          <div
            onClick={() => {
              setReadModal(true);
            }}
            data-uk-tooltip={`title: Read ; pos: bottom`}
            className="h-full cursor-pointer px-2.5 flex items-center text-blue-600"
          >
            <span className="far fa-book-open"></span>
          </div>
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
          definition={definition}
          setModal={setEditModal}
        />
      </Modal>

      <Modal visible={deleteModal} setVisible={setDeleteModal}>
        <DeleteModal url={url} id={id} setModal={setDeleteModal} />
      </Modal>

      <Modal visible={readModal} setVisible={setReadModal}>
        <div className="uk-animation-scale-up bg-white">
          <div className="uk-modal-body relative">
            <button
              onClick={() => {
                setReadModal(false);
              }}
              className="absolute top-3 right-3"
              type="button"
              data-uk-close
            ></button>

            <p className="text-base break-words">{definition}</p>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Items;
