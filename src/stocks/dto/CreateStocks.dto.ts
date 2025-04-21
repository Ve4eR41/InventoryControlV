import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateStocksDto {
    createDate: string;
    name: string;
    product: number;
    component: string;
    quantityBase: number;
    quantityNow: number;
    price: number;
    deliveryPrice: number;
}
