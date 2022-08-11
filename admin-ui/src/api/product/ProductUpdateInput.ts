import { InvoiceLineItemUpdateManyWithoutProductsInput } from "./InvoiceLineItemUpdateManyWithoutProductsInput";
import { PlanUpdateManyWithoutProductsInput } from "./PlanUpdateManyWithoutProductsInput";
import { ProductPricingUpdateManyWithoutProductsInput } from "./ProductPricingUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  invoiceLineItems?: InvoiceLineItemUpdateManyWithoutProductsInput;
  plans?: PlanUpdateManyWithoutProductsInput;
  productPricings?: ProductPricingUpdateManyWithoutProductsInput;
};
