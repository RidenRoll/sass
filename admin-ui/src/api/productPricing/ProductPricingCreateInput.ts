import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { Currency } from "../currency/Currency";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductPricingCreateInput = {
  Currency?: CurrencyWhereUniqueInput | null;
  endingAt?: number | null;
  Price?: number | null;
  product?: ProductWhereUniqueInput | null;
  startingAt?: number | null;
};
