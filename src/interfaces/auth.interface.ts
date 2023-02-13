import { Request } from 'express';

export interface User {
  _id: string;
  email: string;
  password: string;
}

export interface DataStoredInToken {
  _id: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: User;
}
