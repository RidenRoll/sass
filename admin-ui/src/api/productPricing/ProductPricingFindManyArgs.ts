import { ProductPricingWhereInput } from "./ProductPricingWhereInput";
import { ProductPricingOrderByInput } from "./ProductPricingOrderByInput";

export type ProductPricingFindManyArgs = {
  where?: ProductPricingWhereInput;
  orderBy?: Array<ProductPricingOrderByInput>;
  skip?: number;
  take?: number;
};
