import cloudinaryUpload from "../config/cloudinaryUpload.js";
import Restaurant from "../models/restaurantModel.js";
import fs from "fs-extra";

export const getAll = async (req, res) => {
  const findResult = await Restaurant.find().select("-menus -__v -createdAt -updatedAt");
  if (findResult) {
    return res
      .status(200)
      .json({ success: true, message: "Get restaurants successful", data: findResult });
  } else {
    return res
      .status(404)
      .json({ success: false, message: "No restaurants found!", data: null });
  }
};

export const create = async (req, res) => {
  const reqData = JSON.parse(req.body.data);
  const file = req.file;
  const existingRestaurant = await Restaurant.findOne({ name: reqData.name });
  if (existingRestaurant) {
    fs.remove(file.path);
    return res.status(409).json({
      success: false,
      message: "Restaurant already exist!",
      data: null,
    });
  } else {
    const url = await cloudinaryUpload
      .upload(file.path, {
        folder: "delivery/restaurant/",
      })
      .then((result) => result.secure_url);
    const savedRestaurant = await Restaurant.create({ ...reqData, image: url });
    fs.remove(file.path);
    if (savedRestaurant) {
      return res.status(201).json({
        success: true,
        message: "Create restaurant successful!",
        data: null,
      });
    }
  }
};

export const deleteRestaurant = async (req, res) => {
  let id = req.params.id;
  const isDelete = await Restaurant.findByIdAndDelete(id);
  if (!isDelete) {
    return res
      .status(404)
      .json({ success: false, message: "No restaurant Found", data: null });
  } else {
    return res
      .status(200)
      .json({ success: true, message: "Delete Successful", data: null });
  }
};

export const update = async (req, res) => {
  let reqData = JSON.parse(req.body.data);
  let existingRestaurant = await Restaurant.findOne({
    name: reqData.name,
    _id: { $ne: reqData._id },
  });
  if (existingRestaurant) {
    return res
      .status(409)
      .json({ success: false, message: "Restaurant already exists!", data: null });
  } else {
    if (req.file) {
      const result = await cloudinaryUpload.upload(req.file.path, {
        folder: "delivery/restaurant/",
      });
      fs.remove(req.file.path);
      reqData.image = result.secure_url;
    }
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(reqData._id, reqData);
    if (updatedRestaurant) {
      return res
        .status(200)
        .json({ success: true, message: "Edit Restaurant Successful", data: null });
    }
  }
};

export const addMenu = async (req, res) => {
  let reqData = JSON.parse(req.body.data);
  const { name } = reqData;
  const id = req.params.id;
  const file = req.file;
  const isExist = await Restaurant.findOne({ _id: id, "menus.name": name });
  if (isExist) {
    fs.remove(file.path);
    return res.status(409).json({
      success: false,
      message: "Menu already exist in this restaurant!",
      data: null,
    });
  } else {
    const result = await cloudinaryUpload.upload(file.path, {
      folder: "delivery/menu/",
    });
    fs.remove(req.file.path);
    reqData.image = result.secure_url;
    const updateResult = await Restaurant.findOneAndUpdate(
      { _id: id },
      {
        $addToSet: { menus: reqData },
      },
      { new: true, upsert: false }
    );
    if (updateResult) {
      return res
        .status(200)
        .json({ success: true, message: "Add menu successful", data: null });
    }
  }
};

export const deleteMenu = async (req, res) => {
  const { id, menuId } = req.params;
  const deleteResult = await Restaurant.findOneAndUpdate(
    { _id: id },
    {
      $pull: { menus: { _id: menuId } },
    }
  );
  if (deleteResult) {
    return res
      .status(200)
      .json({ success: true, message: "Delete menu successful", data: null });
  }
};

export const updateMenu = async (req, res) => {
  const { id, menuId } = req.params;
  let reqData = JSON.parse(req.body.data);
  const file = req.file;
  const findResult = await Restaurant.findOne({
    _id: id,
    menus: {
      $elemMatch: {
        _id: { $ne: menuId },
        name: reqData.name,
      },
    },
  });
  if (findResult) {
    return res
      .status(409)
      .json({ success: false, message: "The menu name already exists!", data: null });
  } else {
    if (file) {
      const result = await cloudinaryUpload.upload(file.path, {
        folder: "delivery/menu/",
      });
      fs.remove(file.path);
      reqData.image = result.secure_url;
    }
    const updatedMenu = await Restaurant.findOneAndUpdate(
      { _id: id, "menus._id": menuId },
      {
        $set: {
          "menus.$": reqData,
        },
      }
    );
    if (updatedMenu) {
      return res
        .status(200)
        .json({ success: true, message: "Update menu successful", data: null });
    }
  }
};

export const getRestaurant = async (req, res) => {
  let id = req.params.id;
  const findResult = await Restaurant.findById(id);
  if (!findResult) {
    return res
      .status(404)
      .json({ success: false, message: "No restaurant found", data: null });
  }
  return res
    .status(200)
    .json({ success: true, message: "Get restaurant successful", data: findResult });
};
