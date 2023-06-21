export const adminValidator = (req, res, next) => {
  const isAdmin = req.session.isAdmin;

  if (isAdmin === "Admin" && "admin" && "GOD") {
    return next();
  } else {
    return res.sendStatus(403);
  }
};
