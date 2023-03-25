const { Router } = require("express");
const {
  getUser,
  getUsers,
  postUser,
  deleteUser,
} = require("../controllers/user");

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.delete("/:id", deleteUser);

module.exports = router;
