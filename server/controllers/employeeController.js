import Employee from "../models/employeeModel.js";

export const login = async (req, res) => {
  const data = req.body;
  const findResult = await Employee.findOne({ ...data }).select(
    "-password -__v -updatedAt -createdAt"
  );
  if (findResult) {
    return res
      .status(200)
      .json({ success: true, message: "Login successful!", data: findResult });
  } else {
    return res
      .status(404)
      .json({ success: false, message: "No user found!", data: null });
  }
};

export const signup = async (req, res) => {
  const data = req.body;
  const findResult = await Employee.findOne({ email: data.email });
  if (findResult) {
    return res
      .status(409)
      .json({ success: false, message: "Employee already exists!", data: null });
  }
  const savedResult = await Employee.create(data);
  if (savedResult) {
    return res
      .status(201)
      .json({ success: true, message: "Register successful!", data: null });
  }
};
