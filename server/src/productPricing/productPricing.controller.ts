import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductPricingService } from "./productPricing.service";
import { ProductPricingControllerBase } from "./base/productPricing.controller.base";

@swagger.ApiTags("productPricings")
@common.Controller("productPricings")
export class ProductPricingController extends ProductPricingControllerBase {
  constructor(
    protected readonly service: ProductPricingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
