import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  if (notes.length > 0) {
    return notes.map((note) => {
      return (
        <Note
          title={note.title}
          content={note.content}
          id={note.id}
          key={note.id}
        />
      );
    });
  } else {
    return (
      <h1>
        nothing to display here yet yet
        <br />
        <Link className="btn btn-primary" to="/create">
          create note
        </Link>
      </h1>
    );
  }
};

const Note = (props) => {
  function onsubmit(e, id) {
    e.preventDefault();
    axios.delete("http://localhost:5000/notes/" + id);
    window.location = "/";
    // .then((response) => console.log(response.data));
    // setNotes(notes.filter((n) => n.id !== id));
  }
  // console.log(user);
  return (
    <div>
      <h1 className="display-5 text-capitalize">{props.title}</h1>
      <p>{props.content} </p>
      <div className="d-flex">
        <div style={{ width: "75px", marginRight: "10px" }}>
          <Link className="btn btn-primary w-100" to={"/edit/" + props.id}>
            edit
          </Link>
        </div>
        <form onSubmit={(e) => onsubmit(e, props.id)}>
          <div>
            <input className="btn btn-danger" type="submit" value="delete" />
          </div>
        </form>
      </div>
    </div>
  );
};
// export default class NotesList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: [],
//     };
//   }

//   componentDidMount() {
//     axios.get("http://localhost:5000/notes").then((response) => {
//       this.setState({ notes: response.data });
//     });
//   }

//   onsubmit(e) {
//     e.preventDefault();
//     axios
//       .delete("http://localhost:5000/notes/" + props.id)
//       .then((res) => console.log(res.data));
//     const newNotes = props.notes.filter((note) => note.id !== props.id);
//   }

//   render() {
//     return this.state.notes.map((note) => {
//       return (
//         <Note
//           title={note.title}
//           content={note.content}
//           id={note.id}
//           key={note.id}
//         />
//       );
//     });
//   }
// }

export default NotesList;
