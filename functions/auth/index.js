//authentication functions here

const { createUser, createContacts } = require("./onUserCreate");
const onUserDelete = require("./onUserDelete");

module.exports = { createUser, createContacts, onUserDelete };
