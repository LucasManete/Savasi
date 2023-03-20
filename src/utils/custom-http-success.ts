/* eslint-disable prettier/prettier */
export const Ok = ({ message, data }) => ({
    error: false,
    statusCode: 200,
    message,
    data,
  });
  
export const Created = ({ message, data }) => ({
    error: false,
    statusCode: 201,
    message,
    data,
  });