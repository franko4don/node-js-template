/* istanbul ignore file */
const constants = require('../config/constants');
const {
    FAILED, SUCCESS, HTTP_UNPROCESSABLE_ENTITY,
    HTTP_NOT_FOUND, HTTP_BAD_REQUEST, HTTP_CONFLICT,
    HTTP_FORBIDDEN, HTTP_OK, HTTP_UNAUTHORIZED
  } = constants;

class Helpers {
  /**
   * 
   * @param {object} errors 
   * processes the errors returned by the validator and puts it in required format
   */
  static extractErrors(errors) {
    const validationErrors = {};
    errors.map(error => {
        if(validationErrors.hasOwnProperty(error.param)){
            validationErrors[error.param].push(error.msg)
        }else{
            validationErrors[error.param] = [error.msg];
        }
        return validationErrors;
    });
    return validationErrors;
  }

  /**
   * 
   * @param {var} num 
   * Checks if value is an integer
   */
  static isANumber(num) {
    return Number.isInteger(Number(num));
  }

  /**
   * 
   * @param {object} res 
   * @param {object} errors 
   * formats response caused due to form validation
   */
  static validationFailed(res, errors){

    let response = {
            status: FAILED,
            errors, 
            status_code: HTTP_UNPROCESSABLE_ENTITY, 
            message: 'unprocessable entity'
            
    }
    return res.status(HTTP_UNPROCESSABLE_ENTITY).send(response)
  }

  /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for not found
   */
  static notFound(res, message){

    let response = {
            status: FAILED,
            status_code: HTTP_NOT_FOUND, 
            message    
    }
    return res.status(HTTP_NOT_FOUND).send(response)
  }

  /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for unauthorized requests
   */
  static unauthorized(res, message){
    let response = {
            status: FAILED,
            status_code: HTTP_UNAUTHORIZED, 
            message
            
    }
    return res.status(HTTP_UNAUTHORIZED).send(response)
  }

  /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for bad requests
   */
  static badRequest(res, message){
    let response = {
            status: FAILED,
            status_code: HTTP_BAD_REQUEST, 
            message
            
    }
    return res.status(HTTP_BAD_REQUEST).send(response)
  }

  /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for successful action that doesn't require data to be sent back
   */
  static actionSuccess(res, message){
    let response = {
            status: SUCCESS,
            status_code: HTTP_OK, 
            message
            
    }
    return res.status(HTTP_OK).send(response)
  }

   /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for failed action that doesn't require data to be sent back
   */
  static actionFailure(res, message){
    let response = {
            status: FAILED,
            status_code: HTTP_CONFLICT, 
            message
            
    }
    return res.status(HTTP_CONFLICT).send(response)
  }

   /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for forbidden action
   */
  static forbidden(res, message){
    let response = {
            status: FAILED,
            status_code: HTTP_FORBIDDEN, 
            message
            
    }
    return res.status(HTTP_FORBIDDEN).send(response)
  }

   /**
   * 
   * @param {object} res 
   * @param {string} message 
   * Formats response for successful action that requires data to be returned
   */
  static success(res, data, message = 'successful'){
    let response = {
            data,
            status: SUCCESS,
            status_code: HTTP_OK, 
            message
            
    }
    return res.status(HTTP_OK).send(response);
  }
}

module.exports = Helpers;