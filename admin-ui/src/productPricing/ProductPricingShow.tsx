import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductPricingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Currency"
          source="currency.id"
          reference="Currency"
        >
          <TextField source={CURRENCY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="endingAt" source="endingAt" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="Price" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startingAt" source="startingAt" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
