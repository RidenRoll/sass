import { Subscription } from "../subscription/Subscription";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
  username: string;
};
