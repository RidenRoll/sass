import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  DateInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { PlanTitle } from "../plan/PlanTitle";
import { UserTitle } from "../user/UserTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="cancelledAt" source="cancelledAt" />
        <DateInput label="downgradedAt" source="downgradedAt" />
        <NumberInput
          step={1}
          label="downgradedToPlanId"
          source="downgradedToPlanId"
        />
        <DateInput label="endsAt" source="endsAt" />
        <ReferenceInput source="invoice.id" reference="Invoice" label="Invoice">
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
        <ReferenceInput source="plan.id" reference="Plan" label="Plan">
          <SelectInput optionText={PlanTitle} />
        </ReferenceInput>
        <DateTimeInput label="renewedAt" source="renewedAt" />
        <NumberInput
          step={1}
          label="renewedSubscriptionId"
          source="renewedSubscriptionId"
        />
        <DateInput label="startsAt" source="startsAt" />
        <DateInput label="upgradedAt" source="upgradedAt" />
        <NumberInput
          step={1}
          label="upgradedToPlanId"
          source="upgradedToPlanId"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
