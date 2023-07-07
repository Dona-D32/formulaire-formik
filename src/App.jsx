import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="showcase">
      <div className="overlay">
        <article>
          <h1>Learning to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable.
          </p>
        </article>

        <article>
          <p className="tag">
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </p>

          <Form className="form" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <Form.Control
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">Claim your free trial</Button>

            <Form.Text>
              By clicking the button, you are agreeing to our{" "}
              <span>Terms and Services</span>
            </Form.Text>
          </Form>
        </article>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Values</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default App;
