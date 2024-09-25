import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

const SignInView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  const { t } = useTranslation();
  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img
              src="../../images/banner/Dell.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
          <Link to="/">
            <img
              src="../../images/banner/Laptops.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center"> {t("signIn")}</h4>
          <SignInForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignInView;
