import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Stocks } from "src/stocks/stocks.model";

interface ShipmentsCreationAttrs {
    stocksId: number;
    quantity: number;
    name: string;
    deliveryPriceToWb: number;
    packPrice: number;
    servicesFBS: number;
}

@Table({ tableName: 'shipments' })
export class Shipments extends Model<Shipments, ShipmentsCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;


    @ForeignKey(() => Stocks)
    @Column({type: DataType.INTEGER})
    stocksId: Stocks[];



    @Column({type: DataType.STRING})
    name: string;



    @ApiProperty({ example: '', description: 'Количество отгруженого' })
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    quantity: number;
 


    @ApiProperty({ example: '8', description: 'Цена доставки от ФФ до ВБ за ед товара' })
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    deliveryPriceToWb: number;



    @ApiProperty({ example: '8', description: 'Цена Упаковки' })
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    packPrice: number;


    @ApiProperty({ example: '8', description: 'Цена услуг фбс' })
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    servicesFBS: number;
}
