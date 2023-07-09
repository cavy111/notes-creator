import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditNote = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let params = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/notes/" + params.id)
      .then((response) => {
        return setTitle(response.data.title), setContent(response.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onsubmit = (e) => {
    e.preventDefault();
    const note = { title: title, content: content };
    console.log(note);
    axios
      .put("http://localhost:5000/notes/" + params.id + "/edit", note)
      .then((res) => console.log(res.data));
    window.location = "/";
  };

  return (
    <div>
      <h1>Enter Note Details</h1>
      <form onSubmit={(e) => onsubmit(e)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control mb-2"
            rows={5}
            name="content"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <input type="submit" value="save" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default EditNote;

// import axios from "axios";
// import { Component } from "react";

// export default class EditNote extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       content: "",
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/notes/edit/" + this.props.match.params.id)
//       .then((response) => {
//         this.setState({
//           title: response.data.title,
//           content: response.data.content,
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           title: <input value={this.state.title} />
//           content: <input value={this.state.content} />
//           <button>save</button>
//         </form>
//       </div>
//     );
//   }
// }
