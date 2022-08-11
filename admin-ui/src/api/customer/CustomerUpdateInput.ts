import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  currency?: CurrencyWhereUniqueInput | null;
  email?: string | null;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  postalCode?: string | null;
};
