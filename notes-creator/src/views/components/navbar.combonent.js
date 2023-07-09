import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  if (user) {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Notes Creator
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/notes" className="nav-link">
                Notes
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create a note
              </Link>
            </li>
            <li className="navbar-item">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location = "/note/" + title;
                }}
                className="d-flex"
              >
                <input
                  className="form-control"
                  placeholder="search note by title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <input type="submit" value="Search" />
              </form>
            </li>
            <li className="navbar-item">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  localStorage.setItem("user", null);
                  window.location = "/login";
                }}
              >
                <input value="Logout" className=" nav-link" type="submit" />
              </form>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/login" className="navbar-brand">
          Notes Creator
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
