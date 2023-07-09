const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("notes_creator_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
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

module.exports = Note;
