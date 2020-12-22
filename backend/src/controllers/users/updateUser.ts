import { Response, Request } from "express";
import { UserInterface } from "../../types/user";
import User from "../../models/user";

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    await User.findByIdAndUpdate({ _id: id }, body);
    const updatedUser: UserInterface | null = await User.findById(id);
    res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    console.log("error :>> ", error);
    throw error;
  }
};

export default updateUser;
