import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InvoiceLineItemServiceBase } from "./base/invoiceLineItem.service.base";

@Injectable()
export class InvoiceLineItemService extends InvoiceLineItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
