import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
  username?: StringFilter;
};
