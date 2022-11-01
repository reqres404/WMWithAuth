import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css"

export default function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

  return (
    <div className="openingCard">
      <Card.Body>
        <h3 className="text-center mb-4"
        >Sign Up</h3>

        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>

          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required />
          </Form.Group>
          <br/>
          <Button className="w-100">Sign Up</Button>
        </Form>
      </Card.Body>

      <div>
        <div className="w-100 text-center mt-2">
          Already have an acoount? Log In
        </div>
      </div>
    </div>
  );
}
