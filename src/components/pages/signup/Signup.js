import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import "./Signup.css";
import { useFirebase } from "../../context/Firebase";

const Signup = () => {
  const Firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await Firebase.signupUserWithEmailAndPassword(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(<h3 style={{ textAlign: "center" }}>No User Found</h3>);
    }
  };

  return (
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>Create an Account!</h1>
          <p>
            Create your own personal <br /> account with your personal details
            carefully
          </p>
          {error && <Alert>{error}</Alert>}
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
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit">Sign up</button>
          </Form>
        </div>
        <div className="left">
          <h1>Hello Friend!</h1>
          <p>Create your own personal account carefully</p>
          <span className="py-2">Already have a account?</span>
          <button>
            <Link style={{ textDecoration: "none" }} to="/">
              Sign in here
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
