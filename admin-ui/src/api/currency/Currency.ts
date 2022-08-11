import { Customer } from "../customer/Customer";
import { ProductPricing } from "../productPricing/ProductPricing";

export type Currency = {
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  name: string | null;
  productPricings?: Array<ProductPricing>;
  updatedAt: Date;
};
