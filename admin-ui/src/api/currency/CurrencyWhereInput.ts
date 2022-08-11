import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductPricingListRelationFilter } from "../productPricing/ProductPricingListRelationFilter";

export type CurrencyWhereInput = {
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  productPricings?: ProductPricingListRelationFilter;
};
