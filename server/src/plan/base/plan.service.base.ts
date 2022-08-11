/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Plan, Subscription, Product } from "@prisma/client";

export class PlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PlanFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlanFindManyArgs>
  ): Promise<number> {
    return this.prisma.plan.count(args);
  }

  async findMany<T extends Prisma.PlanFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlanFindManyArgs>
  ): Promise<Plan[]> {
    return this.prisma.plan.findMany(args);
  }
  async findOne<T extends Prisma.PlanFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlanFindUniqueArgs>
  ): Promise<Plan | null> {
    return this.prisma.plan.findUnique(args);
  }
  async create<T extends Prisma.PlanCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlanCreateArgs>
  ): Promise<Plan> {
    return this.prisma.plan.create<T>(args);
  }
  async update<T extends Prisma.PlanUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlanUpdateArgs>
  ): Promise<Plan> {
    return this.prisma.plan.update<T>(args);
  }
  async delete<T extends Prisma.PlanDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PlanDeleteArgs>
  ): Promise<Plan> {
    return this.prisma.plan.delete(args);
  }

  async findSubscriptions(
    parentId: string,
    args: Prisma.SubscriptionFindManyArgs
  ): Promise<Subscription[]> {
    return this.prisma.plan
      .findUnique({
        where: { id: parentId },
      })
      .subscriptions(args);
  }

  async getProduct(parentId: string): Promise<Product | null> {
    return this.prisma.plan
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}