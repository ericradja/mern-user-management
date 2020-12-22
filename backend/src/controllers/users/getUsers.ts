import { Response, Request } from "express";
import { UserInterface } from "../../types/user";
import User from "../../models/user";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const page: number = req.query.page ? Number(req.query.page) : 1;
    const limit: number = req.query.limit ? Number(req.query.limit) : 10;
    const users: UserInterface[] = await User.find()
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await User.find().countDocuments();

    res.status(200).json({ total, users, page, limit });
  } catch (error) {
    throw error;
  }
};

export default getUsers;
