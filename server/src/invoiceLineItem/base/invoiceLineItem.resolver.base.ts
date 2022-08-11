/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateInvoiceLineItemArgs } from "./CreateInvoiceLineItemArgs";
import { UpdateInvoiceLineItemArgs } from "./UpdateInvoiceLineItemArgs";
import { DeleteInvoiceLineItemArgs } from "./DeleteInvoiceLineItemArgs";
import { InvoiceLineItemFindManyArgs } from "./InvoiceLineItemFindManyArgs";
import { InvoiceLineItemFindUniqueArgs } from "./InvoiceLineItemFindUniqueArgs";
import { InvoiceLineItem } from "./InvoiceLineItem";
import { Invoice } from "../../invoice/base/Invoice";
import { Product } from "../../product/base/Product";
import { InvoiceLineItemService } from "../invoiceLineItem.service";

@graphql.Resolver(() => InvoiceLineItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InvoiceLineItemResolverBase {
  constructor(
    protected readonly service: InvoiceLineItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InvoiceLineItem",
    action: "read",
    possession: "any",
  })
  async _invoiceLineItemsMeta(
    @graphql.Args() args: InvoiceLineItemFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InvoiceLineItem])
  @nestAccessControl.UseRoles({
    resource: "InvoiceLineItem",
    action: "read",
    possession: "any",
  })
  async invoiceLineItems(
    @graphql.Args() args: InvoiceLineItemFindManyArgs
  ): Promise<InvoiceLineItem[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InvoiceLineItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InvoiceLineItem",
    action: "read",
    possession: "own",
  })
  async invoiceLineItem(
    @graphql.Args() args: InvoiceLineItemFindUniqueArgs
  ): Promise<InvoiceLineItem | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvoiceLineItem)
  @nestAccessControl.UseRoles({
    resource: "InvoiceLineItem",
    action: "create",
    possession: "any",
  })
  async createInvoiceLineItem(
    @graphql.Args() args: CreateInvoiceLineItemArgs
  ): Promise<InvoiceLineItem> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        invoice: args.data.invoice
          ? {
              connect: args.data.invoice,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvoiceLineItem)
  @nestAccessControl.UseRoles({
    resource: "InvoiceLineItem",
    action: "update",
    possession: "any",
  })
  async updateInvoiceLineItem(
    @graphql.Args() args: UpdateInvoiceLineItemArgs
  ): Promise<InvoiceLineItem | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          invoice: args.data.invoice
            ? {
                connect: args.data.invoice,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => InvoiceLineItem)
  @nestAccessControl.UseRoles({
    resource: "InvoiceLineItem",
    action: "delete",
    possession: "any",
  })
  async deleteInvoiceLineItem(
    @graphql.Args() args: DeleteInvoiceLineItemArgs
  ): Promise<InvoiceLineItem | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Invoice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "any",
  })
  async invoice(
    @graphql.Parent() parent: InvoiceLineItem
  ): Promise<Invoice | null> {
    const result = await this.service.getInvoice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async product(
    @graphql.Parent() parent: InvoiceLineItem
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}