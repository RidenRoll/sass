import { Customer } from "../customer/Customer";
import { InvoiceLineItem } from "../invoiceLineItem/InvoiceLineItem";
import { Subscription } from "../subscription/Subscription";

export type Invoice = {
  createdAt: Date;
  customer?: Customer | null;
  dueDate: Date | null;
  id: string;
  invoiceDate: Date | null;
  invoiceLineItems?: Array<InvoiceLineItem>;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
