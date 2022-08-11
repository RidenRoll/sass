import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const InvoiceLineItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InvoiceLineItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Invoice" source="invoice.id" reference="Invoice">
          <TextField source={INVOICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantity" source="quantity" />
        <TextField label="rawAmount" source="rawAmount" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
