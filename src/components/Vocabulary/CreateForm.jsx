import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Context } from "./../../App";
import { ref } from "./../../utils/firebaseData";

const CreateFormV = ({ url }) => {
  const { user } = useContext(Context);

  return (
    <div className="hidden md:flex absolute left-0 right-0 bottom-0 bg-white border-t flex-col items-center">
      <div className="p-3 w-3/4">
        <Formik
          initialValues={{ word: "", translation: "" }}
          onSubmit={({ word, translation }, actions) => {
            const setData = ref(`engtor/${user.uid}/vocabulary/${url}`);

            const item = {
              word,
              translation,
              date: Date.now(),
            };

            setData.push(item);
            actions.resetForm();
          }}
          validationSchema={yup.object().shape({
            word: yup.string().required(),
            translation: yup.string().required(),
          })}
        >
          {({ values, handleChange, handleSubmit, isValid }) => (
            <Form className="uk-form-stacked flex justify-between">
              <div className="mr-3 w-full">
                <input
                  name="word"
                  onChange={handleChange}
                  type="text"
                  value={values.word}
                  placeholder="Word"
                  className="uk-input h-8 rounded w-full"
                />
              </div>

              <div className="mr-3 w-full">
                <input
                  name="translation"
                  onChange={handleChange}
                  type="text"
                  value={values.translation}
                  placeholder="Translation"
                  className="uk-input h-8 rounded w-full"
                />
              </div>

              <div>
                <button
                  disabled={!isValid}
                  type="button"
                  className="disabled:button h-8 bg-blue-600 text-white text-sm font-semibold px-2 w-28 rounded"
                  onClick={handleSubmit}
                >
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateFormV;
