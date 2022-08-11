import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InvoiceLineItemTitle } from "../invoiceLineItem/InvoiceLineItemTitle";
import { PlanTitle } from "../plan/PlanTitle";
import { ProductPricingTitle } from "../productPricing/ProductPricingTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="invoiceLineItems"
          reference="InvoiceLineItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceLineItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="plans"
          reference="Plan"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlanTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productPricings"
          reference="ProductPricing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductPricingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
