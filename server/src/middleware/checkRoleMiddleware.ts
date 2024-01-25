import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default function checkRole(role: String) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token: string = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Not authorization!!!' });
      }
      const decoded = verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(401).json({ message: 'Not success!!!' });
      }
      req = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorization!!!' });
    }
  };
}
