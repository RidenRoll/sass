import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceLineItemUpdateManyWithoutInvoicesInput } from "./InvoiceLineItemUpdateManyWithoutInvoicesInput";
import { SubscriptionUpdateManyWithoutInvoicesInput } from "./SubscriptionUpdateManyWithoutInvoicesInput";

export type InvoiceUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  invoiceDate?: Date | null;
  invoiceLineItems?: InvoiceLineItemUpdateManyWithoutInvoicesInput;
  subscriptions?: SubscriptionUpdateManyWithoutInvoicesInput;
};
