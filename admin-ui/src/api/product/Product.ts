import { InvoiceLineItem } from "../invoiceLineItem/InvoiceLineItem";
import { Plan } from "../plan/Plan";
import { ProductPricing } from "../productPricing/ProductPricing";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  invoiceLineItems?: Array<InvoiceLineItem>;
  plans?: Array<Plan>;
  productPricings?: Array<ProductPricing>;
  updatedAt: Date;
};
