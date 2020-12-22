import { Response, Request } from "express";
import { UserInterface } from "../../types/user";
import User from "../../models/user";

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: UserInterface | null = await User.findById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    throw error;
  }
};

export default getUser;
