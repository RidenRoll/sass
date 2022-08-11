import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductPricingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductPricings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
