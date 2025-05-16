import { forwardRef, Module } from '@nestjs/common';
import { ShipmentsController } from './shipments.controller';
import { ShipmentsService } from './shipments.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { Shipments } from './shipments.model';
import { Stocks } from 'src/stocks/stocks.model';

@Module({
    controllers: [ShipmentsController],
    providers: [ShipmentsService],
    imports: [
        SequelizeModule.forFeature([Shipments, Stocks]),
        RolesModule, 
        forwardRef(() => AuthModule),
    ],
    exports: [
        ShipmentsService,
    ]
})
export class ShipmentsModule { }
