import { CustomerUpdateManyWithoutCurrenciesInput } from "./CustomerUpdateManyWithoutCurrenciesInput";
import { ProductPricingUpdateManyWithoutCurrenciesInput } from "./ProductPricingUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  customers?: CustomerUpdateManyWithoutCurrenciesInput;
  name?: string | null;
  productPricings?: ProductPricingUpdateManyWithoutCurrenciesInput;
};
