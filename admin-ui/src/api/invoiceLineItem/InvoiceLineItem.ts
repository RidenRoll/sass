import { Invoice } from "../invoice/Invoice";
import { Product } from "../product/Product";

export type InvoiceLineItem = {
  createdAt: Date;
  id: string;
  invoice?: Invoice | null;
  product?: Product | null;
  quantity: number | null;
  rawAmount: number | null;
  updatedAt: Date;
};
