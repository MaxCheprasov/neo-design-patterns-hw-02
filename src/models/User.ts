import { IUser } from '../core/interfaces';

export class User implements IUser {
  constructor(
    public email: string,
    public phone: string,
    public deviceToken: string,
  ) {}
}
