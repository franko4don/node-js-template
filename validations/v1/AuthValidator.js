const Helpers = require('../../helpers/helper');
const {extractErrors, validationFailed} = Helpers;

/**
 * Defines methods for validating Auth functions
 *
 * @class AuthValidator
 */
class AuthValidator {
    /**
   * validates Auth signup
   * @param {object} req
   * @param {object} res
   * @param {callback} next
   */
  static validateAuth(req, res, next) {
    req.check('firstName', 'First Name is required').notEmpty().trim();
    req.check('lastName', 'Last Name is required').notEmpty().trim();
    req.check('email', 'Email field is required').notEmpty().trim().isEmail().withMessage('Invalid email');
    req.check('password', 'Password is required').notEmpty().trim().isLength({ min: 6 })
      .withMessage('password cannot be less then 6 characters');
    
    const errors = req.validationErrors();

    if (errors) {
      return validationFailed(res, extractErrors(errors));
    }
    return next();
  }

   /**
   * validates user sign up inputs
   * @param {object} req
   * @param {object} res
   * @param {callback} next
   */
  static validateAuthLogin(req, res, next) {
    req.check('email', 'Email field is required')
      .notEmpty().trim()
      .isEmail().withMessage('Invalid email');
    req.check('password', 'Password is required')
    const errors = req.validationErrors();

    if (errors) {
      return validationFailed(res, extractErrors(errors));
    }
    return next();
  }

  }
  module.exports = AuthValidator;