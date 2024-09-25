import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  maxLength20,
  minLength8,
} from "../../helpers/validation";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconEmail } from "bootstrap-icons/icons/envelope.svg";
import useAdmin from './../../hooks/useUser';
import { useTranslation } from "react-i18next";

const SignInForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  const { t } = useTranslation();
  const{Login}=useAdmin();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
   
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 const handleSubmitt = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
   Login(formData)
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <Field
        name="email"
        type="email"
        label={t("email")}
        component={renderFormGroupField}
        placeholder={t("emailPlaceholder")}
        icon={IconEmail}
        required={true}
        value={formData.email}
        onChange={handleChange}
        className="mb-3"
      />
      <Field
        name="password"
        type="password"
        label={t("password")}
        component={renderFormGroupField}
        placeholder="******"
        icon={IconShieldLock}
        validate={[required, maxLength20, minLength8]}
        required={true}
        value={formData.password}
        onChange={handleChange}
        maxLength="20"
        minLength="8"
        className="mb-3"
      />
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={submitting}
          onClick={handleSubmitt}
        >
          Log In
        </button>
      </div>
      <Link className="float-start" to="/account/signup" title="Sign Up">
        Create your account
      </Link>
      <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
      <div className="row">
        <div className="col- text-center">
          <p className="text-muted small">Or you can join with</p>
        </div>
        <div className="col- text-center">
          <Link to="/" className="btn btn-light text-white bg-twitter me-3">
            <i className="bi bi-twitter-x" />
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-facebook">
            <i className="bi bi-facebook mx-1" />
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-google">
            <i className="bi bi-google mx-1" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "signin",
  })
)(SignInForm);
