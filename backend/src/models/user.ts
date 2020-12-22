import { UserInterface } from "./../types/user";
import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<UserInterface>("User", userSchema);
