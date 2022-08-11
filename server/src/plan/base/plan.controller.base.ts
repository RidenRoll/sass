/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PlanService } from "../plan.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlanCreateInput } from "./PlanCreateInput";
import { PlanWhereInput } from "./PlanWhereInput";
import { PlanWhereUniqueInput } from "./PlanWhereUniqueInput";
import { PlanFindManyArgs } from "./PlanFindManyArgs";
import { PlanUpdateInput } from "./PlanUpdateInput";
import { Plan } from "./Plan";
import { SubscriptionFindManyArgs } from "../../subscription/base/SubscriptionFindManyArgs";
import { Subscription } from "../../subscription/base/Subscription";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlanControllerBase {
  constructor(
    protected readonly service: PlanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Plan })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: PlanCreateInput): Promise<Plan> {
    return await this.service.create({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        monthsPerInterval: true,
        name: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Plan] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PlanFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Plan[]> {
    const args = plainToClass(PlanFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        monthsPerInterval: true,
        name: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Plan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PlanWhereUniqueInput
  ): Promise<Plan | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        monthsPerInterval: true,
        name: true,

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Plan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PlanWhereUniqueInput,
    @common.Body() data: PlanUpdateInput
  ): Promise<Plan | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          monthsPerInterval: true,
          name: true,

          product: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Plan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PlanWhereUniqueInput
  ): Promise<Plan | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          monthsPerInterval: true,
          name: true,

          product: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Subscription",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/subscriptions")
  @ApiNestedQuery(SubscriptionFindManyArgs)
  async findManySubscriptions(
    @common.Req() request: Request,
    @common.Param() params: PlanWhereUniqueInput
  ): Promise<Subscription[]> {
    const query = plainToClass(SubscriptionFindManyArgs, request.query);
    const results = await this.service.findSubscriptions(params.id, {
      ...query,
      select: {
        cancelledAt: true,
        createdAt: true,
        downgradedAt: true,
        downgradedToPlanId: true,
        endsAt: true,
        id: true,

        invoice: {
          select: {
            id: true,
          },
        },

        plan: {
          select: {
            id: true,
          },
        },

        renewedAt: true,
        renewedSubscriptionId: true,
        startsAt: true,
        updatedAt: true,
        upgradedAt: true,
        upgradedToPlanId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/subscriptions")
  async connectSubscriptions(
    @common.Param() params: PlanWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/subscriptions")
  async updateSubscriptions(
    @common.Param() params: PlanWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/subscriptions")
  async disconnectSubscriptions(
    @common.Param() params: PlanWhereUniqueInput,
    @common.Body() body: SubscriptionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      subscriptions: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
