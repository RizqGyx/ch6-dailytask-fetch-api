const Car = require("../models/car");
const { generateRandomId } = require("../utils/generateId");

const getCars = async (req, res) => {
  try {
    const {
      bookId,
      userId,
      libraryId,
      borrowDate,
      returnDate,
      status,
      page,
      limit,
    } = req.query;

    const pageNum = parseInt(page) || 1;
    const limitData = parseInt(limit) || 10;
    const offset = (pageNum - 1) * limitData;

    const whereClause = {};
    if (bookId) whereClause.bookId = bookId;
    if (userId) whereClause.userId = userId;
    if (libraryId) whereClause.libraryId = libraryId;
    if (borrowDate) whereClause.borrowDate = borrowDate;
    if (returnDate) whereClause.returnDate = returnDate;
    if (status) whereClause.status = status;

    if (req.query.search) {
      whereClause[Op.or] = {
        bookId: { [Op.like]: `%${req.query.search}%` },
        userId: { [Op.like]: `%${req.query.search}%` },
        libraryId: { [Op.like]: `%${req.query.search}%` },
        borrowDate: { [Op.like]: `%${req.query.search}%` },
        returnDate: { [Op.like]: `%${req.query.search}%` },
        status: { [Op.like]: `%${req.query.search}%` },
      };
    }

    const { count, rows: cars } = await Car.findAndCountAll({
      where: whereClause,
      offset,
      limit: limitData,
    });

    const totalPages = Math.ceil(count / limitData);

    res.status(200).json({
      status: "Success",
      data: {
        cars,
        pagination: {
          totalData: count,
          totalPages,
          pageNum,
          limitData,
        },
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    if (!car) {
      throw new ApiError("Car not found", 404);
    }
    res.status(200).json({
      status: "Success",
      data: {
        car,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, err.statusCode || 400));
  }
};

const createCar = async (req, res) => {
  try {
    const carData = {
      id: generateRandomId(),
      ...req.body,
    };

    const cars = await Cars.create(carData);

    response(201, cars, "Success", "Create New Car Data", req, res, false);
  } catch (err) {
    response(400, null, "Failed", err.message, req, res);
  }
};

const updateCarById = async (req, res) => {
  try {
    const id = req.params.id;
    const cars = await Cars.update(id);

    if (!cars)
      return response(
        404,
        null,
        "Failed",
        `Car with ID : ${id} not found`,
        req,
        res
      );

    response(201, cars, "Success", "Create New Car Data", req, res, false);
  } catch (err) {
    response(400, null, "Failed", err.message, req, res);
  }
};

const deleteCarById = async (req, res) => {
  try {
    const id = req.params.id;
    const cars = await Cars.destroy(id);

    if (!cars)
      return response(
        404,
        null,
        "Failed",
        `Car with ID : ${id} not found`,
        req,
        res
      );

    response(
      200,
      cars,
      "Success",
      `Deleted car with ID : ${id}`,
      req,
      res,
      false
    );
  } catch (err) {
    response(400, null, "Failed", err.message, req, res);
  }
};

module.exports = {
  getCars,
  getCarById,
  createCar,
  updateCarById,
  deleteCarById,
};
