import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SubscriptionCreateNestedManyWithoutPlansInput } from "./SubscriptionCreateNestedManyWithoutPlansInput";

export type PlanCreateInput = {
  monthsPerInterval?: number | null;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutPlansInput;
};
