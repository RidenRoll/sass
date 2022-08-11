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

import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InvoiceLineItem"
          target="ProductId"
          label="InvoiceLineItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantity" source="quantity" />
            <TextField label="rawAmount" source="rawAmount" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Plan" target="ProductId" label="Plans">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="monthsPerInterval" source="monthsPerInterval" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductPricing"
          target="ProductId"
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
