import { Response, Request } from "express";
import { UserInterface } from "./../../types/user";
import User from "../../models/user";

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      UserInterface,
      "firstname" | "lastname" | "email"
    >;
    const user: UserInterface = new User({
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
    });
    const newUser: UserInterface = await user.save();
    res.status(201).json({ message: "User added", user: newUser });
  } catch (error) {
    console.log("error :>> ", error);
    throw error;
  }
};

export default addUser;
