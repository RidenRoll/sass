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
import { InvoiceLineItemWhereInput } from "./InvoiceLineItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InvoiceLineItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InvoiceLineItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceLineItemWhereInput)
  @IsOptional()
  @Field(() => InvoiceLineItemWhereInput, {
    nullable: true,
  })
  every?: InvoiceLineItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceLineItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceLineItemWhereInput)
  @IsOptional()
  @Field(() => InvoiceLineItemWhereInput, {
    nullable: true,
  })
  some?: InvoiceLineItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceLineItemWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceLineItemWhereInput)
  @IsOptional()
  @Field(() => InvoiceLineItemWhereInput, {
    nullable: true,
  })
  none?: InvoiceLineItemWhereInput;
}
export { InvoiceLineItemListRelationFilter };