import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NotesList from "./views/components/noteslist.component.js";
import EditNote from "./views/components/editnote.component.js";
import CreateNote from "./views/components/createnote.component.js";
import Register from "./views/components/register.component.js";
import Login from "./views/components/login.component.js";
import Protected from "./views/components/protected.component.js";
import Note from "./views/components/note.component.js";

function Approuter() {
  return (
    <Routes>
      {/* <Navbar /> */}
      {/* <br /> */}
      {/* <Route path="/" element={<Navbar />} /> */}
      <Route
        path="/"
        element={
          <Protected>
            <NotesList />
          </Protected>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/notes"
        element={
          <Protected>
            <NotesList />
          </Protected>
        }
      />
      <Route
        path="/note/:title"
        element={
          <Protected>
            <Note />
          </Protected>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <Protected>
            <EditNote />
          </Protected>
        }
      />
      <Route
        path="/create"
        element={
          <Protected>
            <CreateNote />
          </Protected>
        }
      />
    </Routes>
  );
}

export default Approuter;
