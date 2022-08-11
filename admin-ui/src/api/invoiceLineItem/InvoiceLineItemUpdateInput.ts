import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InvoiceLineItemUpdateInput = {
  invoice?: InvoiceWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  rawAmount?: number | null;
};
