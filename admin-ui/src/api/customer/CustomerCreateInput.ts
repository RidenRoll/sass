import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  currency?: CurrencyWhereUniqueInput | null;
  email?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  postalCode?: string | null;
};
