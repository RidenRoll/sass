import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  invoiceDate?: SortOrder;
  updatedAt?: SortOrder;
};
