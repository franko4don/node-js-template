var jwt = require('jsonwebtoken');
const helpers = require('./../helpers/helper');
const {unauthorized, forbidden} = helpers;
/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 * Checks that the header has a valid token
 */
function verifyToken(req, res, next) {
  let token = req.headers['Authorization'];
  if (!token)
    return forbidden(res, 'No token provided.');
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if (err)
    return unauthorized(res, 'Failed to authenticate token.');
    // if everything good, save to request for use in other routes
    // req.body.userId = decoded._id;
    next();
  });
}

module.exports = verifyToken;