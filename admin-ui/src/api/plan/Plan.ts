import { Product } from "../product/Product";
import { Subscription } from "../subscription/Subscription";

export type Plan = {
  createdAt: Date;
  id: string;
  monthsPerInterval: number | null;
  name: string | null;
  product?: Product | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
