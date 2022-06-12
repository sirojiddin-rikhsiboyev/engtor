import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Context } from "./../../App";
import { updateChild } from "../../utils/firebaseData";

const EditModalV = ({ url, id, word, translation, setModal }) => {
  const { user } = useContext(Context);

  return (
    <div className="bg-white p-6 w-auto">
      <h2 className="text-xl mb-3 font-semibold uk-text-dark">Edit word</h2>

      <Formik
        initialValues={{ word: word, translation: translation }}
        onSubmit={({ word, translation }) => {
          updateChild(`engtor/${user.uid}/vocabulary/${url}`, id, {
            word,
            translation,
          }).then(() => {
            setModal(false);
          });
        }}
        validationSchema={yup.object().shape({
          word: yup.string().required(),
          translation: yup.string().required(),
        })}
      >
        {({ values, handleChange, handleSubmit, isValid }) => (
          <Form className="uk-form-stacked flex flex-col items-end">
            <div className="w-full mb-4">
              <input
                name="word"
                onChange={handleChange}
                type="text"
                value={values.word}
                placeholder="Word"
                className="uk-input h-8 rounded w-full"
              />
            </div>

            <div className="w-full mb-4">
              <input
                name="translation"
                onChange={handleChange}
                type="text"
                value={values.translation}
                placeholder="Translation"
                className="uk-input h-8 rounded w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="h-8 bg-white uk-text-dark text-sm font-semibold px-2 w-28 rounded border hover:bg-gray-100 transition ease-in-out duration-200"
                onClick={() => {
                  setModal(false);
                }}
              >
                Cancel
              </button>

              <button
                disabled={!isValid}
                type="button"
                className="disabled:button h-8 bg-blue-600 text-white text-sm font-semibold px-2 w-28 rounded hover:bg-blue-700 transition ease-in-out duration-200"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditModalV;
