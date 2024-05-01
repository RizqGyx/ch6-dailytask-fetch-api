const ApiError = require("../utils/apiError");

const validateRoleRegister = (req, res, next) => {
  try {
    let role = req.body.role;
    const userRole = req.user.role;

    const rolePermissions = {
      Superadmin: ["Superadmin", "Member", "Admin"],
      Admin: ["Member", "Admin"],
      Member: ["Member"],
    };

    if (!role) {
      role = "Member";
    }

    if (
      !rolePermissions[userRole] ||
      !rolePermissions[userRole].includes(role)
    ) {
      console.log("Validation failed:", role);
      return next(
        new ApiError(
          "Forbidden: You don't have permission to assign this role.",
          403
        )
      );
    }

    next();
  } catch (error) {
    return next(new ApiError("Invalid role in request", 400));
  }
};

module.exports = validateRoleRegister;
