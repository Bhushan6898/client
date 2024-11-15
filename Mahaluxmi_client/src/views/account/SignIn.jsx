import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BaseURL } from "../../repository/repository";
import logo from '../../mylogo1.png'
import backgroundImg from '../../images.jpeg';
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

const SignInView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  const { t } = useTranslation();
  return (
    <div className="container my-3"  style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
    
      backgroundRepeat: "no-repeat",
    }}>
      <div className="row " >
        <div className="col-md-6  p-3 d-none d-md-block">
          
          <Link to="/signin">
            <img
              src="../../images/signup\login1.png"
              alt="..."
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
  {/* <h4 className="text-center"> {t("signIn")}</h4> */}
  {/* <img src={logo} className="img-fluid" alt="Logo" style={{maxHeight:'250px',marginLeft:'120px'}} /> */}
  <SignInForm onSubmit={onSubmit} />
</div>
      </div>
    </div>
  );
};

export default SignInView;
