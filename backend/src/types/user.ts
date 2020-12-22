import { Document } from "mongoose";

export interface UserInterface extends Document {
  firstname: string;
  lastname: string;
  email: string;
}
