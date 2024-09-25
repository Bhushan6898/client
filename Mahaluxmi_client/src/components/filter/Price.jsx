import React from "react";

const FilterPrice = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterPrice"
        aria-expanded="true"
        aria-controls="filterPrice"
      >
        Price
      </div>
      <ul className="list-group list-group-flush show" id="filterPrice">
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="priceRange1"
            />
            <label className="form-check-label" htmlFor="priceRange1">
              1.00 - 100.00 <span className="text-muted">(10)</span>
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="priceRange2"
            />
            <label className="form-check-label" htmlFor="priceRange2">
              100.00 - 300.00 <span className="text-muted">(8)</span>
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="priceRange3"
            />
            <label className="form-check-label" htmlFor="priceRange3">
              300.00 - 600.00 <span className="text-muted">(6)</span>
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="priceRange4"
            />
            <label className="form-check-label" htmlFor="priceRange4">
              600.00 - 1,500.00 <span className="text-muted">(4)</span>
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="priceRange5"
            />
            <label className="form-check-label" htmlFor="priceRange5">
              1,500.00 - 3,000.00 <span className="text-muted">(3)</span>
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="priceRange6"
            />
            <label className="form-check-label" htmlFor="priceRange6">
              3,000.00 & Above <span className="text-muted">(2)</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterPrice;
