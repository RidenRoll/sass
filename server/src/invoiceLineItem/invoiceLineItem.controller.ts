import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvoiceLineItemService } from "./invoiceLineItem.service";
import { InvoiceLineItemControllerBase } from "./base/invoiceLineItem.controller.base";

@swagger.ApiTags("invoiceLineItems")
@common.Controller("invoiceLineItems")
export class InvoiceLineItemController extends InvoiceLineItemControllerBase {
  constructor(
    protected readonly service: InvoiceLineItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
