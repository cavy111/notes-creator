import axios from "axios";
import { useState } from "react";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    axios
      .post("http://localhost:5000/users/create", newUser)
      .then(() => (window.location = "/"))
      .catch((error) => setError(error.response.data["email"]));

    // window.location = "/";
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Enter registration details</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          required
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control "
          placeholder="Enter email"
        />
        <span className="text-sm text-danger">{error}</span>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          required
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-2"
          placeholder="Enter password"
        />
      </div>
      <input value="Register" type="submit" className="btn btn-primary" />
    </form>
  );
};

export default Register;
