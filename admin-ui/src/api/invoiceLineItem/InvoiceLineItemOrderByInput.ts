import { SortOrder } from "../../util/SortOrder";

export type InvoiceLineItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  rawAmount?: SortOrder;
  updatedAt?: SortOrder;
};
