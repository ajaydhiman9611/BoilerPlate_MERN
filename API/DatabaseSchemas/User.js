const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    role: {
      type: String
    }
  },
  { collection: "Users" }
);

module.exports = mongoose.model("users", user);