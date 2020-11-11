const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@proshop.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@doe.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@doe.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
