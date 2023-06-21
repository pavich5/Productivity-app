export const isGod = (req, res, next) => {
    const isGod = req.session.isGod;
  
    if (isGod === "GOD" && "god") {
      return next();
    } else {
      return res.sendStatus(403);
    }
  };
  