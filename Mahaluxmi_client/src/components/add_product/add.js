import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAdmin from '../../hooks/useUser';

const AddProductPage = () => {
  const { AddProduct } = useAdmin();
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    brand: '',
    sku: '',
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
    formData.append('image', image);
    AddProduct(formData);


  };

  return (
    <Form onSubmit={handleSubmit} className="p-4">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter product name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

     
     

      <Form.Group as={Col} controlId="formGridCategory">
        <Form.Label>Category</Form.Label>
        <Form.Select
          name="category"
          value={productData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="Nuts & Bolts">Nuts & Bolts</option>
          <option value="Cement">Cement</option>
          <option value="Agricultural Tools">Agricultural Tools</option>
          <option value="Pipes & Fittings">Pipes & Fittings</option>
          <option value="Paint & Adhesives">Paint & Adhesives</option>
          <option value="Electrical Fittings">Electrical Fittings</option>
          <option value="Power Tools">Power Tools</option>
          <option value="Hand Tools">Hand Tools</option>
          <option value="Safety Equipment">Safety Equipment</option>
          <option value="Fasteners">Fasteners</option>
          <option value="Plumbing Materials">Plumbing Materials</option>
        </Form.Select>
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridStock">
          <Form.Label>Stock Quantity</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            placeholder="Enter stock quantity"
            value={productData.stock}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridBrand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            placeholder="Enter brand"
            value={productData.brand}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSKU">
          <Form.Label>SKU</Form.Label>
          <Form.Control
            type="text"
            name="sku"
            placeholder="Enter SKU"
            value={productData.sku}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Product Image</Form.Label>
        <Form.Control
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default AddProductPage;
