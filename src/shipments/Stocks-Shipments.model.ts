import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Stocks } from "src/stocks/stocks.model";
import { Shipments } from "./shipments.model";



@Table({ tableName: 'stocks_shipments', createdAt: false, updatedAt: false })
export class StocksShipments extends Model<StocksShipments> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;



    @ForeignKey(() => Stocks)
    @Column({ type: DataType.INTEGER })
    stocksId: number;



    @ApiProperty({ example: '', description: 'ID ' })
    @ForeignKey(() => Shipments)
    @Column({ type: DataType.INTEGER })
    shipmentsId: number;



}
