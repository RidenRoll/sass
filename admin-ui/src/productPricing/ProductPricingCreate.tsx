import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { ProductTitle } from "../product/ProductTitle";

export const ProductPricingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="Currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <NumberInput label="endingAt" source="endingAt" />
        <NumberInput label="price" source="Price" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput label="startingAt" source="startingAt" />
      </SimpleForm>
    </Create>
  );
};
