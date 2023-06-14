import { Request, Response } from "express";
import { db } from "../utils/db";
import { iTask } from "../utils/interfaces";
import crypto from "crypto";
import moment from "moment";

export const createTask = (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const date = Date.now();
    const ID = crypto.randomUUID();
    const newTask: iTask = {
      id: ID,
      title,
      date: moment(date).format("LLLL"),
      time: moment(date).fromNow(),
      complete: false,
    };

    db.push(newTask);

    return res.status(201).json({
      message: "Task created",
      data: newTask,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task can not be created",
    });
  }
};

export const viewTask = (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    return res.status(200).json({
      message: "view Task created",
      data: db,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task can not be created",
    });
  }
};

export const singleTask = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = db.filter((el: iTask) => {
      return el.id === id;
    });

    return res.status(200).json({
      message: "view single task",
      data: task,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task can not be created",
    });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const date = Date.now();
    const ID = crypto.randomUUID();

    const task = db.filter((el: iTask) => {
      return el.id !== id;
    });

    return res.status(201).json({
      message: "Task updated",
      data: { task, db },
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task can not be created",
    });
  }
};

export const updateTask = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const date = Date.now();
    const ID = crypto.randomUUID();

    const task = db.filter((el: iTask) => {
      return el.id === id ? (el.complete = true) : null;
    });

    return res.status(201).json({
      message: "Task updated",
      data: task,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task can not be created",
    });
  }
};
