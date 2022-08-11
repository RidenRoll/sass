import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address1?: SortOrder;
  address2?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  postalCode?: SortOrder;
  updatedAt?: SortOrder;
};
