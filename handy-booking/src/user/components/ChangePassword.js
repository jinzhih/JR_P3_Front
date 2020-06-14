import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function ChangePassword() {
  return (
    <Form style={{ margin: "50px 50px" }}>
      <Form.Label style={{ fontSize: "20px" }}>Password</Form.Label>
      <Form.Group controlId="formGroupPassword">
        <Form.Control type="password" placeholder="Old Password *" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Control type="password" placeholder="New Password *" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Control type="password" placeholder="Repeat Password *" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Done
      </Button>{" "}
    </Form>
  );
}

export default ChangePassword;
