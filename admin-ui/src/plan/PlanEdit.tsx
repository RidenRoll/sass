import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const PlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="monthsPerInterval"
          source="monthsPerInterval"
        />
        <TextInput label="name" source="name" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="subscriptions"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
