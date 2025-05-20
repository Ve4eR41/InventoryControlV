import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Shipments } from "src/shipments/shipments.model";

interface StocksCreationAttrs {
    createDate: string;
    name: string;
    product: number;
    component: string;
    quantityBase: number;
    quantityNow: number;
    price: number;
    deliveryPrice: number;
}

@Table({ tableName: 'stocks' })
export class Stocks extends Model<Stocks, StocksCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryKey
    @Column({ type: DataType.NUMBER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;



    @ApiProperty({ example: '', description: 'Название поставки' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;



    @ApiProperty({ example: '', description: 'Готовая продукция (баркод)' })
    @Column({ type: DataType.NUMBER, allowNull: false })
    product: number;



    @ApiProperty({ example: '', description: 'Комплектующие из которой состоит продукция' })
    @Column({ type: DataType.STRING, allowNull: false })
    component: string;



    @ApiProperty({ example: '', description: 'Количество комплектующих на момент поставки' })
    @Column({ type: DataType.NUMBER, allowNull: false, defaultValue: 0 })
    quantityBase: number;



    @ApiProperty({ example: '', description: 'Количество комплектующих оставшихся' })
    @Column({ type: DataType.NUMBER, allowNull: false, defaultValue: 0 })
    quantityNow: number;



    @ApiProperty({ example: '100', description: 'Цена ед товара' })
    @Column({ type: DataType.NUMBER, allowNull: false, defaultValue: 0 })
    price: number;



    @ApiProperty({ example: '8', description: 'Цена доставки за ед товара' })
    @Column({ type: DataType.NUMBER, allowNull: false, defaultValue: 0 })
    deliveryPrice: number;

    
    @HasMany(() => Shipments)
    shipments: Shipments[]
}
