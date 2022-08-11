import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type CustomerWhereInput = {
  address1?: StringNullableFilter;
  address2?: StringNullableFilter;
  city?: StringNullableFilter;
  currency?: CurrencyWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  postalCode?: StringNullableFilter;
};
