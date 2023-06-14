import express, { Application, Request, Response } from "express";
import cors from "cors";
import auth from "./router/authRouter";
import { iUser } from "./utils/interfaces";

const port: number = 3666;
const app: Application = express();

let data: iUser[] = [];

app
  .use(cors())
  .use(express.json())
  .get("/", (req: Request, res: Response) => {
    try {
      res.status(200).json({
        message: "You just hit the auth services endpoint",
      });
    } catch (error) {
      res.status(404).json({
        message: "Not Found",
        data: error,
      });
    }
  })

  //   //create new User
  //   .post("/api/register")
  //   //get all Users
  //   .get("/api/users")
  //   //get single User
  //   .get("/api/user/:id")
  //   //Login User
  //   .post("/api/user/login");

  .use("/api/user", auth);

const server = app.listen(port, () => {
  console.log("Server is live");
});

process.on("uncaughtException", (err: any) => {
  console.log("server is shutting down because of uncaught-Exception");
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("server is shutting down because of unhandled-Rejection");
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
