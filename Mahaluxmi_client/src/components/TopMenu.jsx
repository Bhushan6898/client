import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TopMenu = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home">
        {t('appTitle')}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button
              className="btn nav-link dropdown-toggle fw-bold"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              {t('allPages')}
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/">
                  {t('signIn')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/account/signup">
                  {t('signUp')}
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/checkout">
                  {t('checkout')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/contact-us">
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/blog">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/blog/detail">
                  {t('blogDetail')}
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category">
              {t('buildingMaterial')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category">
              {t('plumbing')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category">
              {t('electronics')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addproduct">
              {t('addProduct')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/documentation">
              {t('View')}
            </Link>
          </li>
          {/* Move language selector to the last item */}
          <li className="nav-item ml-auto" style={{ marginLeft: '250px' }}>
        <select
          className="form-select"
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
        </select>
      </li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
};

export default TopMenu;
