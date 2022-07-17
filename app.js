/**  never type */
var getErrorResponse = function (message, code) {
    throw { message: message, code: code };
};
getErrorResponse('Error server', 500);
