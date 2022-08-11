import { SortOrder } from "../../util/SortOrder";

export type PlanOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  monthsPerInterval?: SortOrder;
  name?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
};
