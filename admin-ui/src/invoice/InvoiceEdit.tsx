import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { InvoiceLineItemTitle } from "../invoiceLineItem/InvoiceLineItemTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="dueDate" source="dueDate" />
        <DateTimeInput label="invoiceDate" source="invoiceDate" />
        <ReferenceArrayInput
          source="invoiceLineItems"
          reference="InvoiceLineItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceLineItemTitle} />
        </ReferenceArrayInput>
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
