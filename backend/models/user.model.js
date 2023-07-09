const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("notes_creator_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
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
      isEmail: {
        msg: "should be a valid email",
      },
      notEmpty: {
        msg: "email cannot be empty",
      },
    },
    unique: {
      args: true,
      msg: "Email address already in use!",
    },
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
