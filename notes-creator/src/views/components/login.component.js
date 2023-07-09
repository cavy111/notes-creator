import axios from "axios";
import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios
      .post("http://localhost:5000/users/user", user)
      .then((response) => {
        if (response.data) {
          // window.location = "/";
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(JSON.parse(localStorage.getItem("user")));
          window.location = "/";
        } else {
          setError("wrong email/password combination");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <span className="text-danger">{error}</span>
      <h1>Enter Login Details</h1>
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
        {/* <span className="text-sm text-danger">{error}</span> */}
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
      <input value="Login" type="submit" className="btn btn-primary" />
    </form>
  );
};

export default Login;
