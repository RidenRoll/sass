import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductPricingServiceBase } from "./base/productPricing.service.base";

@Injectable()
export class ProductPricingService extends ProductPricingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
