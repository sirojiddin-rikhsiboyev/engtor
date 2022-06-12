import React from "react";
import { Formik } from "formik";
import Grid from "./../components/Login Form/Grid";
import Background from "./../components/Login Form/Background";
import FormBlock from "./../components/Login Form/FormBlock";
import InputText from "./../components/Login Form/InputText";
import InputPassword from "./../components/Login Form/InputPassword";
import Button from "./../components/Login Form/Button";
import { backgrounds, bottomTexts, yupValidators } from "./../utils/consts";
import { useNavigate } from "react-router";
import { signIn } from "./../utils/firebaseAuth";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Grid>
      <Background url={backgrounds.loginPage} />
      <FormBlock
        title="Login"
        bottomTitle="login"
        bottomText={bottomTexts.loginPage}
        url="/register"
        to="Sign Up"
      >
        <Formik
          initialValues={{ emailLogin: "", passwordLogin: "" }}
          validateOnBlur
          onSubmit={({ emailLogin, passwordLogin }) => {
            signIn(emailLogin, passwordLogin).then(() => {
              navigate("/beginner");
            });
          }}
          validationSchema={yupValidators.loginPage(
            "emailLogin",
            "passwordLogin"
          )}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
          }) => (
            <form className="uk-form-stacked">
              <InputText
                label="E-mail"
                placeholder="Enter your e-mail"
                name="emailLogin"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailLogin}
                touched={touched.emailLogin}
                errors={errors.emailLogin}
              />

              <InputPassword
                name="passwordLogin"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordLogin}
                touched={touched.passwordLogin}
                errors={errors.passwordLogin}
                fp={true}
              />

              <Button className="disabled:button" disabled={!isValid} onClick={handleSubmit}>
                Login
              </Button>
            </form>
          )}
        </Formik>
      </FormBlock>
    </Grid>
  );
};

export default Login;
