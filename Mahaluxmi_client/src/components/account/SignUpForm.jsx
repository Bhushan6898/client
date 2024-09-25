import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Form, Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormField from "../../helpers/renderFormField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
} from "../../helpers/validation";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { ReactComponent as IconEmail } from "bootstrap-icons/icons/envelope.svg";
import { useState } from "react";
import useAdmin from "../../hooks/useUser";
import { useTranslation } from "react-i18next";

const SignUpForm = (props) => {
  // const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  const { AddClientDetails } = useAdmin();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    country: '',
    city: '',
    state: '',
  });

  const { t } = useTranslation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmitt = (e) => {
    e.preventDefault();

    AddClientDetails(formData)
  };


  return (
    <form
      onSubmit={handleSubmitt}
    // className={`needs-validation ${submitFailed ? "was-validated" : ""}`}

    >
      <div className="row mb-3">
        <div className="col-md-6">
          <Field
            name="firstName"
            type="text"
            label={t("firstName")}  // Translated label
            component={renderFormField}
            placeholder={t("firstNamePlaceholder")}
            validate={[required, name]}
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <Field
            name="lastName"
            type="text"
            label={t("lastName")}
            component={renderFormField}
            placeholder={t("lastNamePlaceholder")}
            validate={[required, name]}
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Field
            name="mobileNumber"
            type="number"
            label={t("mobileNumber")}
            component={renderFormGroupField}
            placeholder={t("mobileNumberPlaceholder")}
            icon={IconPhone}
            validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
            required
            max="999999999999999"
            min="9999"
            className="mb-3"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <Field
            name="email"
            type="email"
            label={t("email")}
            component={renderFormGroupField}
            placeholder={t("emailPlaceholder")}
            icon={IconEmail}
            required
            value={formData.email}
            onChange={handleChange}
            className="mb-3"
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Field
            name="password"
            type="password"
            label={t("password")}
            component={renderFormGroupField}
            placeholder="******"
            icon={IconShieldLock}
            validate={[required, maxLength20, minLength8]}
            required
            value={formData.password}
            onChange={handleChange}
            maxLength="20"
            minLength="8"
            className="mb-3"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="city"
            type="text"
            label={t("city")}
            component={renderFormField}
            placeholder={t("cityPlaceholder")}
            validate={[required, name]}
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6">
          <Field
            name="state"
            type="text"

            label={t("state")}
            component={renderFormGroupField}
            placeholder={t("statePlaceholder")}
            icon={IconShieldLock}
            validate={[required, maxLength20, minLength8]}
            required
            value={formData.state}
            onChange={handleChange}

            className="mb-3"
          />
        </div>
        <Field
          name="country"
          type="text"
          label={t("country")}
          component={renderFormField}
          placeholder={t("countryPlaceholder")}
          validate={[required, name]}
          required
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"


        >
          {t("Create")}
        </button>
      </div>
      <Link className="float-start" to="/account/signin" title="Sign In">
        {t("signIn")}
      </Link>
      <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        {t("Forgotpassword")}
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
      <div className="row">
        <div className="col- text-center">
          <p className="text-muted small">{t("orJoinWith")}</p>
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
    form: "signup",
  })
)(SignUpForm);
