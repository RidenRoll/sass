import { CustomerCreateNestedManyWithoutCurrenciesInput } from "./CustomerCreateNestedManyWithoutCurrenciesInput";
import { ProductPricingCreateNestedManyWithoutCurrenciesInput } from "./ProductPricingCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  customers?: CustomerCreateNestedManyWithoutCurrenciesInput;
  name?: string | null;
  productPricings?: ProductPricingCreateNestedManyWithoutCurrenciesInput;
};
