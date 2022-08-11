import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CURRENCY_TITLE_FIELD } from "./CurrencyTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const CurrencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Customer"
          target="CurrencyId"
          label="Customers"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductPricing"
          target="CurrencyId"
          label="ProductPricings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Currency"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="endingAt" source="endingAt" />
            <TextField label="ID" source="id" />
            <TextField label="price" source="Price" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startingAt" source="startingAt" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
