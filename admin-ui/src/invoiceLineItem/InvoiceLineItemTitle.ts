import { InvoiceLineItem as TInvoiceLineItem } from "../api/invoiceLineItem/InvoiceLineItem";

export const INVOICELINEITEM_TITLE_FIELD = "id";

export const InvoiceLineItemTitle = (record: TInvoiceLineItem): string => {
  return record.id || record.id;
};
