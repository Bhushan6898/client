import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Table, Card, Image } from "react-bootstrap";
import './form.css'; // Ensure this CSS file is created for custom styles
import mylogo from '../../mylogo1.png'; // Replace with the actual path to your logo
import useAdmin from "../../hooks/useUser"; // Custom hook for admin functions

const BillingForm = () => {
  const { CreateBill,verification } = useAdmin(); // Hook to handle bill creation
  const [formData, setFormData] = useState({
    customerName: "",
    contactNumber: "",
    address: "",
    productName: "",
    quantity: 0,
    price: 0,
  });
  useEffect(() => {
   
    verification();
  }, []);

  const [productList, setProductList] = useState([]); // State to hold added products
  const [contactError, setContactError] = useState(""); // State for contact number validation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate contact number
    if (name === "contactNumber") {
      if (value.length < 10) {
        setContactError("Contact number must be exactly 10 digits.");
      } else if (value.length > 10) {
        setContactError("Contact number must not exceed 10 digits.");
      } else {
        setContactError(""); // Clear error if valid
      }
    }
  };
  const sendBill = () => {
    const totalAmount = calculateTotal(); // Calculate total amount

    const billData = {
      customerName: formData.customerName,
      contactNumber: formData.contactNumber,
      address: formData.address,
      productList: productList,
      totalAmount: totalAmount,
    };
  
    // Call CreateBill with the bill data
    CreateBill(billData)

  }
  // Handle adding a new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      productName: formData.productName,
      quantity: formData.quantity,
      price: formData.price,
    };
   
  

    // Check if product details are valid
    if (newProduct.productName && newProduct.quantity > 0 && newProduct.price > 0) {
      setProductList([...productList, newProduct]);
      setFormData({ ...formData, productName: "", quantity: 0, price: 0 });
    } else {
      alert("Please fill in all product details correctly.");
    }
  };

  // Calculate the total amount for all products
  const calculateTotal = () =>
    productList.reduce((total, product) => total + product.quantity * product.price, 0);

  // Handle sharing the bill via WhatsApp
  const handleShareWhatsApp = async () => {
    try {
      const totalAmount = calculateTotal(); // Calculate the total amount
  
      // Constructing the bill details message
      let billDetails = `*Bill Details:*\n`;
      billDetails += `*Shop Name:* Mahaluxmi Hardware\n`;
      billDetails += `*Owner:* Bhushan Patil\n`;
      billDetails += `*Owner Contact:* 7507546145\n\n`;
      billDetails += `*Customer Name:* ${formData.customerName}\n`;
      billDetails += `*Contact Number:* ${formData.contactNumber}\n`;
      billDetails += `*Address:* ${formData.address}\n\n`;
      billDetails += `*Products:*\n`;

      productList.forEach((product, index) => {
        billDetails += `${index + 1}. ${product.productName} - Quantity: ${product.quantity}, Price: ₹${product.price}, Total: ₹${product.quantity * product.price}\n`;
      });

      billDetails += `\n*Total Amount:* ₹${totalAmount}\n`;
      billDetails += `*Thank you!*\n`;

      // Format the phone number and add the country code
      let phoneNumber = formData.contactNumber.replace(/\D/g, ''); // Remove non-digits
      if (!phoneNumber.startsWith('91')) {
        phoneNumber = `91${phoneNumber}`; // Add India country code
      }

      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(billDetails)}`;

      // Open the WhatsApp URL in a new tab
      window.open(whatsappURL, '_blank');
      sendBill();
    } catch (error) {
      console.error("Error sharing bill on WhatsApp:", error);
    }
  };

  // Check if the form is valid
  const isFormValid = () => {
    return (
      formData.customerName &&
      formData.contactNumber.length === 10 &&
      productList.length > 0
    );
  };

  // Render the component
  return (
    <div className="container mt-5">
      <Card className="shadow-sm p-4">
        <div className="d-flex flex-column flex-md-row align-items-center mb-4">
          <Image
            src={mylogo} // Replace with your logo path
            alt="Mahaluxmi Hardware Logo"
            fluid
            style={{ maxHeight: "100px", marginBottom: "20px", marginRight: "20px" }} // Adjust as needed
          />
          <div className="text-center flex-grow-1">
            <h3 className="display-4" style={{ background: 'linear-gradient(90deg, #FF5733, #FFC300, #DAF7A6)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: "bold" }}>
              Mahaluxmi Hardware & Electric
            </h3>
          </div>
        </div>

        <Form>
          {/* Customer Details */}
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridCustomerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                name="customerName"
                placeholder="Enter customer name"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="border-primary"
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contactNumber"
                placeholder="Enter contact number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className={`border-primary ${contactError ? 'is-invalid' : ''}`} // Styling for validation
                maxLength={10} // Limit input length to 10 characters
              />
              {contactError && (
                <div className="invalid-feedback">{contactError}</div>
              )}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
              className="border-primary"
            />
          </Form.Group>

          {/* Product Details */}
          <h5 className="mt-4">Add Product</h5>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={4} controlId="formGridProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="Enter product name"
                value={formData.productName}
                onChange={handleChange}
                required
                className="border-primary"
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="border-primary"
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridPrice">
              <Form.Label>Price (per unit)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                required
                className="border-primary"
              />
            </Form.Group>
          </Row>

          <Button variant="primary" onClick={handleAddProduct} className="mb-3">Add Product</Button>

          {/* Product Table - Only show if there are products added */}
          {productList.length > 0 && (
            <>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price (per unit)</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.productName}</td>
                      <td>{product.quantity}</td>
                      <td>₹{product.price}</td>
                      <td>₹{product.quantity * product.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="4" className="text-end"><strong>Total Amount:</strong></td>
                    <td><strong>₹{calculateTotal()}</strong></td>
                  </tr>
                </tbody>
              </Table>
            </>
          )}
          {productList.length === 0 && (
            <div className="text-center mt-2">
              <p>No products added yet. Please add product details above.</p>
            </div>
          )}
          {isFormValid() && (
            <div className="text-center mt-4">
              <Button variant="info" onClick={handleShareWhatsApp} className="mx-2">Share via WhatsApp</Button>
            </div>
          )}
        </Form>
      </Card>
    </div>
  );
};

export default BillingForm;
