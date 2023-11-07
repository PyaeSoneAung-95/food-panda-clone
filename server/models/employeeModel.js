import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Employee = model("employee", employeeSchema);

export default Employee;
