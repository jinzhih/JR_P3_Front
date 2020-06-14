import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function ChangeProfile() {
  return (
    <Form style={{ margin: "50px 50px" }}>
      <Form.Label style={{ fontSize: "20px" }}>Personal Details</Form.Label>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder=" " />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder=" www@gmail.com" />
      </Form.Group>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 2,
          borderColor: "#000000",
        }}
      />
      <Form.Label style={{ fontSize: "20px" }}>Contact Details</Form.Label>
      <Form.Group>
        <Form.Label>Contact Number</Form.Label>
        <Form.Control placeholder=" " />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder=" www@gmail.com" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Postcode</Form.Label>
        <Form.Control placeholder=" " />
      </Form.Group>
    </Form>
  );
}
export default ChangeProfile;
