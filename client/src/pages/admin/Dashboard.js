import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext"; // adjust path
import {
  Helmet,
  HelmetProvider
} from "react-helmet-async";
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Spinner,
  Alert
} from "react-bootstrap";

export const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsAdminLoggedIn } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/api/contact/messages")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch messages");
        return res.json();
      })
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    navigate("/");
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <Container className="py-4">
        <Row className="mb-3">
          <Col>
            <h2>Customer Messages</h2>
          </Col>
          <Col className="text-end">
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Col>
        </Row>

        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && !error && (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={msg.id}>
                  <td>{index + 1}</td>
                  <td>{msg.name}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.email}</td>
                  <td>{msg.message}</td>
                  <td>
                    {msg.submitted_at
                      ? new Date(msg.submitted_at.replace(" ", "T")).toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </HelmetProvider>
  );
};
