import express from "express";
import {
  create,
  getAll,
  deleteRestaurant,
  update,
} from "../controllers/restaurantController.js";
import multerUpload from "../config/multerUpload.js";

const router = express.Router();

router.get("/", getAll);
router.delete("/:id", deleteRestaurant);
router.post("/", multerUpload.single("file"), create);
router.put("/", multerUpload.single("file"), update);

export default router;
