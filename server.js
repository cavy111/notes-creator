const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "notes_creator_db",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connection has been established successfully.");
  })
  .catch((error) => {
    console.error("unable to connect to the database: ", error);
  });

const User = sequelize.define("users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: {
      args: true,
      msg: "Email address already in use!",
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Note = sequelize.define("notes", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Title already used",
    },
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("User and Note table created successfully");
  })
  .catch((error) => {
    console.error("unable to create tables: ", error);
  });

app.use(bodyParser.json());
app.use(cors());

const usersRouter = require("./backend/controllers/users");
const notesRouter = require("./backend/controllers/notes");

app.use("/users", usersRouter);
app.use("/notes", notesRouter);

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});

module.exports = app;
