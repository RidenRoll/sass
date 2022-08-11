import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { ProductTitle } from "../product/ProductTitle";

export const InvoiceLineItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
