import { StatusCodes } from "http-status-codes";

export type ErrorResponse = {
  status: StatusCodes;
  message?: string;
  type: string | null;
};

export type ErrorState = {
  status: StatusCodes | null;
  message?: string;
  isError: boolean;
};

const getError = (status: StatusCodes, message: string): ErrorResponse => {
  return {
    type: "error",
    status,
    message,
  };
};

export default getError;
