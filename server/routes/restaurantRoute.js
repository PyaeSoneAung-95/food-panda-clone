import express from "express";
import {
  create,
  getAll,
  deleteRestaurant,
  update,
  addMenu,
  deleteMenu,
  updateMenu,
  getRestaurant,
} from "../controllers/restaurantController.js";
import multerUpload from "../config/multerUpload.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getRestaurant);
router.delete("/:id", deleteRestaurant);
router.post("/", multerUpload.single("file"), create);
router.put("/", multerUpload.single("file"), update);

router.put("/:id/menu", multerUpload.single("file"), addMenu);
router.delete("/:id/menu/:menuId", deleteMenu);
router.put("/:id/menu/:menuId", multerUpload.single("file"), updateMenu);

export default router;
