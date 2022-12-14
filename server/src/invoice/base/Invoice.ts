/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { InvoiceLineItem } from "../../invoiceLineItem/base/InvoiceLineItem";
import { Subscription } from "../../subscription/base/Subscription";
@ObjectType()
class Invoice {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  customer?: Customer | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  invoiceDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [InvoiceLineItem],
  })
  @ValidateNested()
  @Type(() => InvoiceLineItem)
  @IsOptional()
  invoiceLineItems?: Array<InvoiceLineItem>;

  @ApiProperty({
    required: false,
    type: () => [Subscription],
  })
  @ValidateNested()
  @Type(() => Subscription)
  @IsOptional()
  subscriptions?: Array<Subscription>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Invoice };
