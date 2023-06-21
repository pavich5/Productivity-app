export const adminValidator = (req, res, next) => {
  const userRole = req.user.role;
  if (userRole === "Doctor" || userRole === "Admin") {
    return next();
  } else {
    return res.sendStatus(403);
  }
};
