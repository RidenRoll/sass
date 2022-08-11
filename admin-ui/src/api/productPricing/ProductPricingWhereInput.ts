import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { Currency } from "../currency/Currency";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductPricingWhereInput = {
  Currency?: CurrencyWhereUniqueInput;
  endingAt?: FloatNullableFilter;
  id?: StringFilter;
  Price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  startingAt?: FloatNullableFilter;
};
