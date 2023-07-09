import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return (window.location = "/login");
  }
  return children;
};

export default Protected;
