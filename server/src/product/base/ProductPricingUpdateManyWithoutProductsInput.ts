/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductPricingWhereUniqueInput } from "../../productPricing/base/ProductPricingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ProductPricingUpdateManyWithoutProductsInput {
  @Field(() => [ProductPricingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductPricingWhereUniqueInput],
  })
  connect?: Array<ProductPricingWhereUniqueInput>;

  @Field(() => [ProductPricingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductPricingWhereUniqueInput],
  })
  disconnect?: Array<ProductPricingWhereUniqueInput>;

  @Field(() => [ProductPricingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductPricingWhereUniqueInput],
  })
  set?: Array<ProductPricingWhereUniqueInput>;
}
export { ProductPricingUpdateManyWithoutProductsInput };