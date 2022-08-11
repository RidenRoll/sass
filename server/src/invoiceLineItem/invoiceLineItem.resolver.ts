import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InvoiceLineItemResolverBase } from "./base/invoiceLineItem.resolver.base";
import { InvoiceLineItem } from "./base/InvoiceLineItem";
import { InvoiceLineItemService } from "./invoiceLineItem.service";

@graphql.Resolver(() => InvoiceLineItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InvoiceLineItemResolver extends InvoiceLineItemResolverBase {
  constructor(
    protected readonly service: InvoiceLineItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
