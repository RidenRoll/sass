import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  cancelledAt?: SortOrder;
  createdAt?: SortOrder;
  downgradedAt?: SortOrder;
  downgradedToPlanId?: SortOrder;
  endsAt?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  planId?: SortOrder;
  renewedAt?: SortOrder;
  renewedSubscriptionId?: SortOrder;
  startsAt?: SortOrder;
  updatedAt?: SortOrder;
  upgradedAt?: SortOrder;
  upgradedToPlanId?: SortOrder;
  userId?: SortOrder;
};
