import express, { Application, Request, Response } from "express";
import crypto from "crypto";
import { iUser } from "../utils/interfaces";

let data: iUser[] = [];

export const register = (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newId = crypto.randomBytes(16).toString("hex");

    const newUser = { id: newId, name, email, password };
    data.push(newUser);
    res.status(201).json({
      message: "created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      data: error,
    });
  }
};

export const getUser = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: "view users",
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      data: error,
    });
  }
};

export const singleUSer = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const singleUser = data.filter((el: iUser) => {
      return el?.id === id;
    });
    res.status(200).json({
      message: "view single user",
      data: singleUser,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      data: error,
    });
  }
};

export const loginUser = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    data.filter((el: iUser) => {
      if (el?.email === email && el.password === password) {
        return res.status(201).json({
          message: "login user",
          data: el,
        });
      } else {
        return res.status(404).json({
          message: "user not found",
        });
      }
    });

    return res.status(200).json({
      message: "LOGIN",
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
      data: error,
    });
  }
};
