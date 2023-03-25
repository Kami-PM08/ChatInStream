const { Router } = require("express");
const {
  getMessagesByChat,
  postMessage,
  deleteMessage,
} = require("../controllers/message");
const jwtValidator = require("../middlewares/jwtValidator");

const router = Router();

router.use(jwtValidator);

router.get("/:id", getMessagesByChat);
router.post("/", postMessage);
router.delete("/:id", deleteMessage);

module.exports = router;
