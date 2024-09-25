import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  return (
    <div className="card mb-3 accordion">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterCategory"
        aria-expanded="true"
        aria-controls="filterCategory"
      >
        Categories
      </div>
      <ul className="list-group list-group-flush show" id="filterCategory">
      <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Nuts & Bolts
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Cement
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Agricultural Tools
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Building Materials
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Plumbing Supplies
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Electrical Tools
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Paint & Finishing Supplies
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Hand Tools
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Power Tools
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FilterCategory;
