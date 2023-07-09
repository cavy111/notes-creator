import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./views/components/navbar.combonent.js";
import Approuter from "./approuter.js";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Approuter />
    </div>
  );
}

export default App;
