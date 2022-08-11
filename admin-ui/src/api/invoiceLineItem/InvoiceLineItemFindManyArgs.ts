import { InvoiceLineItemWhereInput } from "./InvoiceLineItemWhereInput";
import { InvoiceLineItemOrderByInput } from "./InvoiceLineItemOrderByInput";

export type InvoiceLineItemFindManyArgs = {
  where?: InvoiceLineItemWhereInput;
  orderBy?: Array<InvoiceLineItemOrderByInput>;
  skip?: number;
  take?: number;
};
