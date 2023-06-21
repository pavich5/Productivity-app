import jwt from "jsonwebtoken";

// Here we take userId as parametar or we can take anything
// we want to take to put into the body so we can use it
// and sing the token with our secret key so only we can
// create acess tokens becouse only we have secret keys
export const createAccessToken = userId => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    // expiresIn configures how long the token will be valid
    expiresIn: "5m",
  });
};

// Here we verify the access tokes by taking the token as a
// parametar and we verify it by comparing the token and decoding
// it with our secret key to verify if it matches
export const verifyAccessToken = token => {
  // Verifies a token and returns the payload if success or throws an error
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

// Here we do the same as acces token but these token last 7d
// and their function is to give us new acess tokens and they
// have seprate secret key 
export const createRefreshToken = userId => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    // Refresh tokens expire after a longer period
    expiresIn: "7d",
  });
};

// here we also verify the refresh tokens by using diffrend
// secret key
export const verifyRefreshToken = refreshToken => {
  // Verifies a token and returns the payload if success or throws an error
  return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
};
