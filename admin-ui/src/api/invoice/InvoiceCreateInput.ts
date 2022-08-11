import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceLineItemCreateNestedManyWithoutInvoicesInput } from "./InvoiceLineItemCreateNestedManyWithoutInvoicesInput";
import { SubscriptionCreateNestedManyWithoutInvoicesInput } from "./SubscriptionCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  invoiceDate?: Date | null;
  invoiceLineItems?: InvoiceLineItemCreateNestedManyWithoutInvoicesInput;
  subscriptions?: SubscriptionCreateNestedManyWithoutInvoicesInput;
};
