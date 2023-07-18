import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';


function App() {
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().required('Le numéro de carte est obligatoire').matches(/^[0-9]{16}$/, 'Le numéro de carte doit contenir 16 chiffres'),
    cardName: Yup.string().required('Le nom du titulaire de la carte est obligatoire'),
    expiryDate: Yup.string().required('La date d\'expiration est obligatoire').matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'La date d\'expiration doit être au format MM/YY'),
    cvc: Yup.string().required('Le CVC est obligatoire').matches(/^[0-9]{3}$/, 'Le CVC doit contenir 3 chiffres'),
  });

  const handleSubmit = (values) => {
    console.log('Formulaire soumis avec succès !', values);
  };

  return (
    <Container>
      <Card className="mt-4 p-4">
        <h1 className="mb-4">Card Details</h1>
        <Formik
          initialValues={{
            cardNumber: '',
            cardName: '',
            expiryDate: '',
            cvc: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  value={values.cardNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.cardNumber}
                />
                <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Card Name</Form.Label>
                <Form.Control
                  type="text"
                  name="cardName"
                  value={values.cardName}
                  onChange={handleChange}
                  isInvalid={!!errors.cardName}
                />
                <Form.Control.Feedback type="invalid">{errors.cardName}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  name="expiryDate"
                  value={values.expiryDate}
                  onChange={handleChange}
                  isInvalid={!!errors.expiryDate}
                />
                <Form.Control.Feedback type="invalid">{errors.expiryDate}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  type="text"
                  name="cvc"
                  value={values.cvc}
                  onChange={handleChange}
                  isInvalid={!!errors.cvc}
                />
                <Form.Control.Feedback type="invalid">{errors.cvc}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
}

export default App;
