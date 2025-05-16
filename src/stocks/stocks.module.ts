import { forwardRef, Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Stocks } from "./stocks.model";
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";
import { Shipments } from 'src/shipments/shipments.model';

@Module({
    controllers: [StocksController],
    providers: [StocksService],
    imports: [
        SequelizeModule.forFeature([Stocks, Shipments]),
        RolesModule,
        forwardRef(() => AuthModule),
    ],
    exports: [
        StocksService,
    ]
})
export class StocksModule { }
