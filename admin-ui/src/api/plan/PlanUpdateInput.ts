import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SubscriptionUpdateManyWithoutPlansInput } from "./SubscriptionUpdateManyWithoutPlansInput";

export type PlanUpdateInput = {
  monthsPerInterval?: number | null;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
  subscriptions?: SubscriptionUpdateManyWithoutPlansInput;
};
