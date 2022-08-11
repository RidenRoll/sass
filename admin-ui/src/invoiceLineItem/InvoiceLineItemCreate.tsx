import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { ProductTitle } from "../product/ProductTitle";

export const InvoiceLineItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="invoice.id" reference="Invoice" label="Invoice">
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="rawAmount" source="rawAmount" />
      </SimpleForm>
    </Create>
  );
};
