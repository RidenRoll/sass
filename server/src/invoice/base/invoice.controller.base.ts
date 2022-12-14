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
import { InvoiceService } from "../invoice.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InvoiceCreateInput } from "./InvoiceCreateInput";
import { InvoiceWhereInput } from "./InvoiceWhereInput";
import { InvoiceWhereUniqueInput } from "./InvoiceWhereUniqueInput";
import { InvoiceFindManyArgs } from "./InvoiceFindManyArgs";
import { InvoiceUpdateInput } from "./InvoiceUpdateInput";
import { Invoice } from "./Invoice";
import { InvoiceLineItemFindManyArgs } from "../../invoiceLineItem/base/InvoiceLineItemFindManyArgs";
import { InvoiceLineItem } from "../../invoiceLineItem/base/InvoiceLineItem";
import { InvoiceLineItemWhereUniqueInput } from "../../invoiceLineItem/base/InvoiceLineItemWhereUniqueInput";
import { SubscriptionFindManyArgs } from "../../subscription/base/SubscriptionFindManyArgs";
import { Subscription } from "../../subscription/base/Subscription";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InvoiceControllerBase {
  constructor(
    protected readonly service: InvoiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Invoice })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: InvoiceCreateInput): Promise<Invoice> {
    return await this.service.create({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        dueDate: true,
        id: true,
        invoiceDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Invoice] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(InvoiceFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Invoice[]> {
    const args = plainToClass(InvoiceFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        dueDate: true,
        id: true,
        invoiceDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Invoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: InvoiceWhereUniqueInput
  ): Promise<Invoice | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        dueDate: true,
        id: true,
        invoiceDate: true,
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
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Invoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: InvoiceWhereUniqueInput,
    @common.Body() data: InvoiceUpdateInput
  ): Promise<Invoice | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          dueDate: true,
          id: true,
          invoiceDate: true,
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
    resource: "Invoice",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Invoice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: InvoiceWhereUniqueInput
  ): Promise<Invoice | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          dueDate: true,
          id: true,
          invoiceDate: true,
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
    resource: "InvoiceLineItem",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/invoiceLineItems")
  @ApiNestedQuery(InvoiceLineItemFindManyArgs)
  async findManyInvoiceLineItems(
    @common.Req() request: Request,
    @common.Param() params: InvoiceWhereUniqueInput
  ): Promise<InvoiceLineItem[]> {
    const query = plainToClass(InvoiceLineItemFindManyArgs, request.query);
    const results = await this.service.findInvoiceLineItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        invoice: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        rawAmount: true,
        updatedAt: true,
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
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/invoiceLineItems")
  async connectInvoiceLineItems(
    @common.Param() params: InvoiceWhereUniqueInput,
    @common.Body() body: InvoiceLineItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoiceLineItems: {
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
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/invoiceLineItems")
  async updateInvoiceLineItems(
    @common.Param() params: InvoiceWhereUniqueInput,
    @common.Body() body: InvoiceLineItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoiceLineItems: {
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
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/invoiceLineItems")
  async disconnectInvoiceLineItems(
    @common.Param() params: InvoiceWhereUniqueInput,
    @common.Body() body: InvoiceLineItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoiceLineItems: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: InvoiceWhereUniqueInput
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
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/subscriptions")
  async connectSubscriptions(
    @common.Param() params: InvoiceWhereUniqueInput,
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
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/subscriptions")
  async updateSubscriptions(
    @common.Param() params: InvoiceWhereUniqueInput,
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
    resource: "Invoice",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/subscriptions")
  async disconnectSubscriptions(
    @common.Param() params: InvoiceWhereUniqueInput,
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
