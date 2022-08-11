import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InvoiceLineItemCreateInput = {
  invoice?: InvoiceWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  rawAmount?: number | null;
};
