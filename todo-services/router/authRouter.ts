import express, { Router } from "express";
import { getUsers } from "../../todo-services/controller/authControllerServices";
const router: Router = express.Router();

router.route("/").get(getUsers);

export default router;