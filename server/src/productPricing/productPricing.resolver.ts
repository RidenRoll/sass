import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductPricingResolverBase } from "./base/productPricing.resolver.base";
import { ProductPricing } from "./base/ProductPricing";
import { ProductPricingService } from "./productPricing.service";

@graphql.Resolver(() => ProductPricing)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductPricingResolver extends ProductPricingResolverBase {
  constructor(
    protected readonly service: ProductPricingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
