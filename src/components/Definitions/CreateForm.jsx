import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Context } from "./../../App";
import { ref } from "./../../utils/firebaseData";

const CreateForm = ({ url }) => {
  const { user } = useContext(Context);

  return (
    <div className="hidden md:flex absolute left-0 right-0 bottom-0 bg-white border-t flex-col items-center">
      <div className="p-3 w-3/4">
        <Formik
          initialValues={{ definition: "" }}
          onSubmit={({ definition }, actions) => {
            const setData = ref(`engtor/${user.uid}/definitions/${url}`);

            const item = {
              definition,
              date: Date.now(),
            };

            setData.push(item);
            actions.resetForm();
          }}
          validationSchema={yup.object().shape({
            definition: yup.string().required(),
          })}
        >
          {({ values, handleChange, handleSubmit, isValid }) => (
            <Form className="uk-form-stacked flex justify-between">
              <div className="mr-3 w-full">
                <input
                  name="definition"
                  onChange={handleChange}
                  type="text"
                  value={values.definition}
                  placeholder="Definition"
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

export default CreateForm;
