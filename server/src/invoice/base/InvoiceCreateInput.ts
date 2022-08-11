/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { InvoiceLineItemCreateNestedManyWithoutInvoicesInput } from "./InvoiceLineItemCreateNestedManyWithoutInvoicesInput";
import { SubscriptionCreateNestedManyWithoutInvoicesInput } from "./SubscriptionCreateNestedManyWithoutInvoicesInput";
@InputType()
class InvoiceCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  invoiceDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceLineItemCreateNestedManyWithoutInvoicesInput,
  })
  @ValidateNested()
  @Type(() => InvoiceLineItemCreateNestedManyWithoutInvoicesInput)
  @IsOptional()
  @Field(() => InvoiceLineItemCreateNestedManyWithoutInvoicesInput, {
    nullable: true,
  })
  invoiceLineItems?: InvoiceLineItemCreateNestedManyWithoutInvoicesInput;

  @ApiProperty({
    required: false,
    type: () => SubscriptionCreateNestedManyWithoutInvoicesInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionCreateNestedManyWithoutInvoicesInput)
  @IsOptional()
  @Field(() => SubscriptionCreateNestedManyWithoutInvoicesInput, {
    nullable: true,
  })
  subscriptions?: SubscriptionCreateNestedManyWithoutInvoicesInput;
}
export { InvoiceCreateInput };
