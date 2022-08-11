import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SubscriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cancelledAt" source="cancelledAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="downgradedAt" source="downgradedAt" />
        <TextField label="downgradedToPlanId" source="downgradedToPlanId" />
        <TextField label="endsAt" source="endsAt" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Invoice" source="invoice.id" reference="Invoice">
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
      </SimpleShowLayout>
    </Show>
  );
};
