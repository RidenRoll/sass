import { SortOrder } from "../../util/SortOrder";

export type ProductPricingOrderByInput = {
  createdAt?: SortOrder;
  CurrencyId?: SortOrder;
  endingAt?: SortOrder;
  id?: SortOrder;
  Price?: SortOrder;
  productId?: SortOrder;
  startingAt?: SortOrder;
  updatedAt?: SortOrder;
};
