import express from "express";
const router = express.Router();
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "./users.controller";

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
