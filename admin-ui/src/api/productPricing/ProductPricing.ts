import { Currency } from "../currency/Currency";
import { Product } from "../product/Product";

export type ProductPricing = {
  createdAt: Date;
  Currency?: Currency | null;
  endingAt: number | null;
  id: string;
  Price: number | null;
  product?: Product | null;
  startingAt: number | null;
  updatedAt: Date;
};
