import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Note = (props) => {
  const [note, setNote] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/notes/note/" + params.title)
      .then((response) => {
        // console.log(response.data);
        setNote(response.data);
        // console.log(note);
      })
      .catch((err) => console.log("error: " + err));
  }, []);
  if (!note) {
    return (
      <p className="lead">
        we could not find a note with that title
        <br />
        see the list of available notes
        <Link to="/">here</Link>
      </p>
    );
  }
  return (
    <div>
      <h1 className="display-5 text-capitalize">{note.title}</h1>
      <p>{note.content} </p>
      <div className="d-flex">
        <div style={{ width: "75px", marginRight: "10px" }}>
          <Link className="btn btn-primary w-100" to={"/edit/" + note.id}>
            edit
          </Link>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            axios.delete("http://localhost:5000/notes/" + note.id);
            window.location = "/";
          }}
        >
          <div>
            <input className="btn btn-danger" type="submit" value="delete" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Note;
