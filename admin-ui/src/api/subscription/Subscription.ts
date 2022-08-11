import { Invoice } from "../invoice/Invoice";
import { Plan } from "../plan/Plan";
import { User } from "../user/User";

export type Subscription = {
  cancelledAt: Date | null;
  createdAt: Date;
  downgradedAt: Date | null;
  downgradedToPlanId: number | null;
  endsAt: Date | null;
  id: string;
  invoice?: Invoice | null;
  plan?: Plan | null;
  renewedAt: Date | null;
  renewedSubscriptionId: number | null;
  startsAt: Date | null;
  updatedAt: Date;
  upgradedAt: Date | null;
  upgradedToPlanId: number | null;
  user?: User;
};
