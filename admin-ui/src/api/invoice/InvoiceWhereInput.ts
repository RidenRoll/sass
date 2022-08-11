import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceLineItemListRelationFilter } from "../invoiceLineItem/InvoiceLineItemListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type InvoiceWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceDate?: DateTimeNullableFilter;
  invoiceLineItems?: InvoiceLineItemListRelationFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
