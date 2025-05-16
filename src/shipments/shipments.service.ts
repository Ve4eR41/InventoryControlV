import { Injectable } from '@nestjs/common';
import { CreateShipmentsDto } from './dto/CreateShipmentsDto';
import { Shipments } from './shipments.model';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { FilterShipmentsDto } from './dto/FilterShipmentsDto';

@Injectable()
export class ShipmentsService {


    constructor(@InjectModel(Shipments) private shipmentsRepository: typeof Shipments, private sequelize: Sequelize
    ) { }


    async getAll() {
        const query = `
        SELECT "shipments".*, "stocks".* , "shipments"."name" AS "shipmentsName", "stocks"."name" AS "stocksName"
        FROM "shipments"
        LEFT OUTER JOIN "stocks" ON "shipments"."stocksId" = "stocks"."id"
        `;

        const [shipments] = await this.sequelize.query(query);
        return shipments;
    }


    async create(dto: CreateShipmentsDto[]) {
        const stocks = await this.shipmentsRepository.bulkCreate(dto);
        return stocks;
    }



    async getByName(dto: FilterShipmentsDto) {
        const query = `
        SELECT "shipments".*, "stocks".*
        FROM "shipments"
        LEFT OUTER JOIN "stocks" ON "shipments"."stocksId" = "stocks"."id"
        WHERE "shipments"."name" = :name
        `;

        const [shipments] = await this.sequelize.query(query, {
            replacements: { ...dto },
        });
        return shipments;
    }



}
