import { Module } from "@nestjs/common";
import { ProductPricingModuleBase } from "./base/productPricing.module.base";
import { ProductPricingService } from "./productPricing.service";
import { ProductPricingController } from "./productPricing.controller";
import { ProductPricingResolver } from "./productPricing.resolver";

@Module({
  imports: [ProductPricingModuleBase],
  controllers: [ProductPricingController],
  providers: [ProductPricingService, ProductPricingResolver],
  exports: [ProductPricingService],
})
export class ProductPricingModule {}
