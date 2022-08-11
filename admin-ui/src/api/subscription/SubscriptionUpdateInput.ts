import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  cancelledAt?: Date | null;
  downgradedAt?: Date | null;
  downgradedToPlanId?: number | null;
  endsAt?: Date | null;
  invoice?: InvoiceWhereUniqueInput | null;
  plan?: PlanWhereUniqueInput | null;
  renewedAt?: Date | null;
  renewedSubscriptionId?: number | null;
  startsAt?: Date | null;
  upgradedAt?: Date | null;
  upgradedToPlanId?: number | null;
  user?: UserWhereUniqueInput;
};
