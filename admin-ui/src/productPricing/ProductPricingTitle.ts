import { ProductPricing as TProductPricing } from "../api/productPricing/ProductPricing";

export const PRODUCTPRICING_TITLE_FIELD = "id";

export const ProductPricingTitle = (record: TProductPricing): string => {
  return record.id || record.id;
};
