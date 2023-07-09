let Note = require("../notes-creator/src/models/note.model");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

describe("/post", () => {
  it("should fail to create a note because title should be unique", (done) => {
    let note = { title: "some title here", content: "some content here" };
    chai
      .request("http://localhost:5000")
      .post("/notes/create")
      .send(note)
      .end((err, res) => {
        res.status.should.equal(400);
        res.body.should.have.property("title");
        res.body.title.should.be.eql("Title already used");
        done();
      });
  });

  it("should create a new note", (done) => {
    let note = {
      title: "new title number 5",
      content: "some new content here",
    };
    chai
      .request("http://localhost:5000")
      .post("/notes/create")
      .send(note)
      .end((err, res) => {
        res.status.should.eql(200);
        res.body.should.eql("note created successfully");
        done();
      });
  });
});

describe("/Get", () => {
  it("it shoold get all the notes", (done) => {
    chai
      .request(server)
      .get("/notes")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

describe("/put :id/edit", () => {
  it("should edit a note with the given id", (done) => {
    const updated = { title: "updated title", content: "updated content" };
    chai
      .request(server)
      .put("/notes/7/edit")
      .send(updated)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.eql("note updated successfully");
        done();
      });
  });
});

describe("/delete /:id", () => {
  it("should delete a note with the given id", (done) => {
    chai
      .request(server)
      .delete("/notes/7")
      .end((err, res) => {
        res.status.should.eql(200);
        res.body.should.eql("note deleted successfully");
        done();
      });
  });
});
describe("/Get /:id", () => {
  it("should get a note with the given id", (done) => {
    chai
      .request(server)
      .get("/notes/57")
      .end((err, res) => {
        res.status.should.eql(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
describe("/Get /:title", () => {
  it("should get a note with the given title", (done) => {
    chai
      .request(server)
      .get("/notes/note/tenth")
      .end((err, res) => {
        res.status.should.eql(200);
        res.body.should.be.a("object");
        res.body.title.should.eql("tenth");
        done();
      });
  });
});
// it("should create a user", (done) => {
//   let user = { name: "user", email: "user@user.com", password: "user" };
//   chai
//     .request(server)
//     .post("/users/create")
//     .send(user)
//     .end((err, res) => {
//       res.status.should.equal(400);
//       res.body.should.be.a("object");
//       res.body.email.should.equal("Email address already in use!");
//       done();
//     });
// });
