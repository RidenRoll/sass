import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type PlanWhereInput = {
  id?: StringFilter;
  monthsPerInterval?: IntNullableFilter;
  name?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  subscriptions?: SubscriptionListRelationFilter;
};
