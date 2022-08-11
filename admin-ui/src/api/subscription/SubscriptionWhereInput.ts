import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  cancelledAt?: DateTimeNullableFilter;
  downgradedAt?: DateTimeNullableFilter;
  downgradedToPlanId?: IntNullableFilter;
  endsAt?: DateTimeNullableFilter;
  id?: StringFilter;
  invoice?: InvoiceWhereUniqueInput;
  plan?: PlanWhereUniqueInput;
  renewedAt?: DateTimeNullableFilter;
  renewedSubscriptionId?: IntNullableFilter;
  startsAt?: DateTimeNullableFilter;
  upgradedAt?: DateTimeNullableFilter;
  upgradedToPlanId?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
