import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employee", employeeSchema);

export default Employee;
