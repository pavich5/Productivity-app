export const sessionValidator = (req, res, next) => {
    const isLoggedIn = req.session.isLoggedIn;
  
    if (isLoggedIn) {
      return next();
    } else {
      return res.sendStatus(403);
    }
  };
  