import { Module } from "@nestjs/common";
import { InvoiceLineItemModuleBase } from "./base/invoiceLineItem.module.base";
import { InvoiceLineItemService } from "./invoiceLineItem.service";
import { InvoiceLineItemController } from "./invoiceLineItem.controller";
import { InvoiceLineItemResolver } from "./invoiceLineItem.resolver";

@Module({
  imports: [InvoiceLineItemModuleBase],
  controllers: [InvoiceLineItemController],
  providers: [InvoiceLineItemService, InvoiceLineItemResolver],
  exports: [InvoiceLineItemService],
})
export class InvoiceLineItemModule {}
