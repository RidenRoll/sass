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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CurrencyWhereUniqueInput } from "../../currency/base/CurrencyWhereUniqueInput";
import { Type } from "class-transformer";
import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";
@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address1?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address2?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: () => CurrencyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CurrencyWhereUniqueInput)
  @IsOptional()
  @Field(() => CurrencyWhereUniqueInput, {
    nullable: true,
  })
  currency?: CurrencyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => InvoiceCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => InvoiceCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  postalCode?: string | null;
}
export { CustomerCreateInput };
