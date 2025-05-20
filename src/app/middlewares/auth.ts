/// <reference path="../../interfaces/index.d.ts" />
import { NextFunction, Response, Request } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../errors/apiError';
import { JwtHelper } from '../../helpers/jwtHelper';

const auth =
  (...requiredPermissions: number[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = JwtHelper.verifyToken(token);
      if (verifiedUser) {
        req.user = verifiedUser;
      }

      if (
        requiredPermissions &&
        !verifiedUser.permissions.some((permission: number) =>
          requiredPermissions.includes(permission)
        )
      ) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
