import { Roles } from '../enums/roles.enum';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  mail: string;
  birth_date: Date;
  adress?: Array<UserAddress>;
  role: Roles.SELLER;
}

export interface UserAddress {
  country: string;
  city: string;
  street: string;
  houseNr: number;
  flatNr?: number;
}