const router = require("express").Router();

const Authenticate = require("../middlewares/authenticate");
const Auth = require("../controllers/authController");
const validateRole = require("../middlewares/validateRoleRegister");
const checkRole = require("../middlewares/checkRole");

router.post(
  "/register/admin",
  Authenticate,
  checkRole("Superadmin", "Admin"),
  validateRole,
  Auth.register
);
router.post("/register/member", validateRole, Auth.registerMember);
router.post("/login", Auth.login);
router.get("/checktoken", Authenticate, Auth.authenticate);

module.exports = router;
