const express = require("express");
const { getPosts, createPost, deletePost, updatePost } = require("../controllers/postcontrollers");
const auth = require("../middleware/auth");
const noteRouter = express.Router();

noteRouter.get("/", auth, getPosts);

noteRouter.post("/", auth, createPost);

noteRouter.delete("/:id", auth, deletePost);

noteRouter.put("/:id", auth, updatePost);

module.exports = noteRouter;