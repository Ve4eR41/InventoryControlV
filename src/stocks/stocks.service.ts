import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Stocks } from "./stocks.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateStocksDto } from "./dto/CreateStocks.dto";
import { RolesService } from "../roles/roles.service";
import { Sequelize } from 'sequelize';

@Injectable()
export class StocksService {

    constructor(@InjectModel(Stocks) private stocksRepository: typeof Stocks, private sequelize: Sequelize) { }

    async getAllStocks() {
        const stocks = await this.stocksRepository.findAll({ include: { all: true } });
        return stocks;
    }



    async getStocksByFilter() {
        const stocks = await this.stocksRepository.findAll({ include: { all: true } });
        return stocks;
    }



    async createStocks(dto: CreateStocksDto[]) {
        const stocks = await this.stocksRepository.bulkCreate(dto);
        return stocks;
    }



    async destroyStocks() {
        const stocks = await this.stocksRepository.destroy({ where: { name: 'test' } });
        return stocks;
    }

    
    
    async getPricePer() {
        const query = `SELECT 
        "component", 
        "product",
        SUM("quantityNow") AS "quantityNow", 
        SUM("totalPrice") / SUM("quantityNow") AS "pricePer", 
        SUM("totalDeliveryPrice") / SUM("quantityNow") AS "deliveryPricePer"
        
        FROM (SELECT "component","product","quantityNow", "price" * "quantityNow" AS "totalPrice", "deliveryPrice" * "quantityNow" AS "totalDeliveryPrice" FROM stocks ) AS virtualtable
        GROUP BY "component", "product"`;

        const [stocks] = await this.sequelize.query(query);
        return stocks;
    }



}
