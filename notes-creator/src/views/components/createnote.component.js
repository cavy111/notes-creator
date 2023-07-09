import axios from "axios";
import { useState } from "react";

const CreateNote = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const note = { title, content };
    axios
      .post("http://localhost:5000/notes/create", note)
      .then(() => (window.location = "/"))
      .catch((error) => {
        setError(error.response.data["title"]);
      });
  };
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <h1>Enter Note Details</h1>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
          className="form-control"
        />
        <span className="text-sm text-danger">{error}</span>
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          className="form-control mb-2  "
          rows={5}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          required
        >
          {content}
        </textarea>
      </div>
      <input className="btn btn-primary" value="Create" type="submit" />
    </form>
  );
};

export default CreateNote;
