import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceLineItemListRelationFilter } from "../invoiceLineItem/InvoiceLineItemListRelationFilter";
import { PlanListRelationFilter } from "../plan/PlanListRelationFilter";
import { ProductPricingListRelationFilter } from "../productPricing/ProductPricingListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  invoiceLineItems?: InvoiceLineItemListRelationFilter;
  plans?: PlanListRelationFilter;
  productPricings?: ProductPricingListRelationFilter;
};
