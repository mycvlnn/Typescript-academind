/**  never type */

const getErrorResponse = (message: string, code: number): never => {
  throw { message, code }
}

getErrorResponse('Error server', 500)
