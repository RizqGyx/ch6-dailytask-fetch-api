const express = require("express");

const carController = require("../controllers/carController");
const upload = require("../middlewares/uploader");

const router = express.Router();

router
  .route("/")
  .get(carController.getCars)
  .post(upload.array("images"), carController.createCar);
router
  .route("/:id")
  .get(carController.getCarById)
  .patch(upload.array("images"), carController.updateCarById)
  .delete(carController.deleteCarById);

module.exports = router;
