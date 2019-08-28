const db = require("../data/dbConfig");

module.exports = {
  addUser,
  findUsers,
  findUserBy,
  findUserById
};

function findUsers() {
  return db("users").select("id", "username", "password", "department");
}

function findUserBy(filter) {
  return db("users").where(filter);
}

function findUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function addUser(user) {
  const [id] = await db("users").insert(user);

  return findUserById(id);
}
