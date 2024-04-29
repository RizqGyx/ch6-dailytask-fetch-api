const router = require("express").Router();

const Car = require("./carRouter");

router.use("/api/v1/car", Car);

module.exports = router;
