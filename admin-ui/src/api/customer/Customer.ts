import { Currency } from "../currency/Currency";
import { Invoice } from "../invoice/Invoice";

export type Customer = {
  address1: string | null;
  address2: string | null;
  city: string | null;
  createdAt: Date;
  currency?: Currency | null;
  email: string | null;
  id: string;
  invoices?: Array<Invoice>;
  name: string | null;
  phone: string | null;
  postalCode: string | null;
  updatedAt: Date;
};
