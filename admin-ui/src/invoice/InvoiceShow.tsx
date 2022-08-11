import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INVOICE_TITLE_FIELD } from "./InvoiceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const InvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="InvoiceLineItem"
          target="InvoiceId"
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
        <ReferenceManyField
          reference="Subscription"
          target="InvoiceId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <TextField label="cancelledAt" source="cancelledAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="downgradedAt" source="downgradedAt" />
            <TextField label="downgradedToPlanId" source="downgradedToPlanId" />
            <TextField label="endsAt" source="endsAt" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Plan" source="plan.id" reference="Plan">
              <TextField source={PLAN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="renewedAt" source="renewedAt" />
            <TextField
              label="renewedSubscriptionId"
              source="renewedSubscriptionId"
            />
            <TextField label="startsAt" source="startsAt" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="upgradedAt" source="upgradedAt" />
            <TextField label="upgradedToPlanId" source="upgradedToPlanId" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
