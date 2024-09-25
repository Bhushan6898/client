import { useEffect, useState } from "react";
import useAdmin from "../hooks/useUser";
import { BaseURL } from "../repository/repository";
const DocumentationView = () => {
  // const [products, setProducts] = useState([]);

  const { Product, productData } = useAdmin();
  useEffect(() => {
    Product();

  }, []);
  const [pr, setPr] = useState([]);

  useEffect(() => {
    if (productData) {
      setPr(productData)
    }
  }, [productData]);
  console.log(pr);

  

  const [products] = useState([
    {
      _id: "product_1",
      name: "Hammer",
      description: "A durable and strong hammer for everyday use.",
      price: 12.99,
      stock: 100,
      category: "Tools",
      brand: "ToolMaster",
      imageUrl: "hammer.jpg", // Assumed to be in /uploads/ directory
    },
    {
      _id: "product_2",
      name: "Screwdriver Set",
      description: "A set of 6 precision screwdrivers.",
      price: 9.99,
      stock: 50,
      category: "Tools",
      brand: "FixIt",
      imageUrl: "screwdriver_set.jpg", // Assumed to be in /uploads/ directory
    },
    {
      _id: "product_3",
      name: "Wrench",
      description: "An adjustable wrench with rubber handle.",
      price: 15.99,
      stock: 25,
      category: "Tools",
      brand: "GripTools",
      imageUrl: "wrench.jpg", // Assumed to be in /uploads/ directory
    },
    {
      _id: "product_4",
      name: "Drill Machine",
      description: "High-powered drill machine with multiple speeds.",
      price: 89.99,
      stock: 20,
      category: "Tools",
      brand: "DrillPro",
      imageUrl: "drill_machine.jpg", // Assumed to be in /uploads/ directory
    },
    {
      _id: "product_5",
      name: "Tape Measure",
      description: "25-foot retractable tape measure with lock feature.",
      price: 7.99,
      stock: 200,
      category: "Accessories",
      brand: "MeasureMax",
      imageUrl: "tape_measure.jpg", // Assumed to be in /uploads/ directory
    },
  ]);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-productList-tab"
              data-toggle="pill"
              href="#v-pills-productList"
              role="tab"
              aria-controls="v-pills-productList"
              aria-selected="true"
            >
              Product List
            </a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-productList"
              role="tabpanel"
              aria-labelledby="v-pills-productList-tab"
            >
              <h4>Products</h4>
              <hr />
              <div className="row g-3">
                {pr.length > 0 ? (
                  pr.map((product) => (
                    <div className="col-md-4" key={product._id}>
                      <div className="card h-100">
                        <img
                          src={`http://localhost:3001${product.imageUrl}`} // Construct the image URL
                          className="card-img-top"
                          alt={product.name}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <p className="card-text">
                            <strong>Price:</strong> ${product.price}
                          </p>
                          <p className="card-text">
                            <strong>Stock:</strong> {product.stock}
                          </p>
                          <p className="card-text">
                            <strong>Category:</strong> {product.category}
                          </p>
                          <p className="card-text">
                            <strong>sku:</strong> {product.sku}
                          </p>
                          <p className="card-text">
                            <strong>Brand:</strong> {product.brand}
                          </p>
                          <a href={`/product/${product._id}`} className="btn btn-primary">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationView;
