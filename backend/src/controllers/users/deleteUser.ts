import { Response, Request } from "express";
import { UserInterface } from "./../../types/user";
import User from "../../models/user";

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedUser: UserInterface | null = await User.findByIdAndRemove(
      req.params.id
    );
    res.status(200).json({
      message: "User deleted",
      user: deletedUser,
    });
  } catch (error) {
    throw error;
  }
};

export default deleteUser;
