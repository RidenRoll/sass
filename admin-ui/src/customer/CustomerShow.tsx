import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address1" source="address1" />
        <TextField label="address2" source="address2" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Currency"
          source="currency.id"
          reference="Currency"
        >
          <TextField source={CURRENCY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="postalCode" source="postalCode" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Invoice"
          target="CustomerId"
          label="Invoices"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="dueDate" source="dueDate" />
            <TextField label="ID" source="id" />
            <TextField label="invoiceDate" source="invoiceDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
