let User = require("../notes-creator/src/models/user.model");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

describe("Get /", () => {
  it("should all the users", (done) => {
    chai
      .request(server)
      .get("/users/")
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.should.be.a("array");
        res.body.length.should.equal(1);
        done();
      });
  });
});
describe("post /create", () => {
  it("should create a new user", (done) => {
    let newUser = {
      name: "calvin",
      email: "calvin@calvin.com",
      password: "calvin",
    };
    chai
      .request(server)
      .post("/users/create")
      .send(newUser)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.should.be.eql("user created successfully");
        done();
      });
  });
});
describe("post /user", () => {
  it("should get a user with the given email and password", (done) => {
    let user = { email: "calvin@calvin.com", password: "calvin" };
    chai
      .request(server)
      .post("/users/user")
      .send(user)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.should.be.a("object");
        res.body.email.should.be.equal("calvin@calvin.com");
        res.body.password.should.be.equal("calvin");
        done();
      });
  });
});
