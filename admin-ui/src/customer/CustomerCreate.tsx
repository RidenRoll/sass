import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CurrencyTitle } from "../currency/CurrencyTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address1" source="address1" />
        <TextInput label="address2" source="address2" />
        <TextInput label="city" source="city" />
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="Currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="invoices"
          reference="Invoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="postalCode" source="postalCode" />
      </SimpleForm>
    </Create>
  );
};
