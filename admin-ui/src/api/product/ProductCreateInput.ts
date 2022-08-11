import { InvoiceLineItemCreateNestedManyWithoutProductsInput } from "./InvoiceLineItemCreateNestedManyWithoutProductsInput";
import { PlanCreateNestedManyWithoutProductsInput } from "./PlanCreateNestedManyWithoutProductsInput";
import { ProductPricingCreateNestedManyWithoutProductsInput } from "./ProductPricingCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  invoiceLineItems?: InvoiceLineItemCreateNestedManyWithoutProductsInput;
  plans?: PlanCreateNestedManyWithoutProductsInput;
  productPricings?: ProductPricingCreateNestedManyWithoutProductsInput;
};
