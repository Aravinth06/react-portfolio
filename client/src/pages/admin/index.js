import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { meta } from "../../content_option";
import { useAuth } from "../../AuthContext";

export const Adminlogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsAdminLoggedIn } = useAuth();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication
    if (credentials.username === "haps" && credentials.password === "Harshan@0903") {
       setIsAdminLoggedIn(true); 
      navigate("/admin/dashboard"); // ✅ Redirect to dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta.title} | Admin Login</title>
      </Helmet>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Admin Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
