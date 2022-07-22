import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import "./Login.css";
import { useFirebase } from "../../context/Firebase";

const Login = () => {
  const Firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await Firebase.signinUserWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
      setError(<h3 style={{ textAlign: "center" }}>No User Found</h3>);
    }
  };

  return (
    <div className="mainContainer">
      <div className="contentArea">
        <div className="left">
          <h1>Welcome Back!</h1>
          <p>to continue please login with your personal account information</p>
          <span className="py-2">Don't have a account?</span>
          <button>
            <Link style={{ textDecoration: "none" }} to="/signup">
              Sign Up
            </Link>
          </button>
        </div>
        <div className="right">
          <h1>Sign in your account</h1>
          <p>Login with your personal details for continue</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                style={{
                  padding: "25px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                style={{
                  padding: "25px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ddd",
                }}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <button type="submit">Login</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
