import { Request, Response } from "express";
import axios from "axios";

const url = `http://localhost:3666`;

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await axios.get(`${url}/api/auth`).then((res: any) => {
        return res.data.data;
    });

    console.log(user);

    return res.status(200).json({
      message: "Users successfully retrieved",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error fetching Users",
    });
  }
};
