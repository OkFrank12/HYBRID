import express, { Router } from "express";
import {
  getUser,
  loginUser,
  register,
  singleUSer,
} from "../controller/authController";

const router: Router = express.Router();

router.route("/").get(getUser);
router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route("/user/:id").get(singleUSer);

export default router;