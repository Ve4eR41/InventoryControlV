import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateStocksDto } from "./dto/CreateStocks.dto";
import { StocksService } from "./stocks.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Stocks } from "./stocks.model";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import { ValidationPipe } from "../pipes/validation.pipe";
import { get } from 'http';

@ApiTags('Пользователи')
@Controller('stocks')
export class StocksController {

    constructor(private stocksService: StocksService) { }



    @ApiOperation({ summary: 'тестовый запрос для проверки того что все работает' })
    @ApiResponse({ status: 200, type: [Stocks] })
    @Get("/test")
    getTest() {
        return "Hello !"
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Stocks] })
    @Get("/all")
    getAll() {
        return this.stocksService.getAllStocks()
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Stocks] })
    @Post()
    create(@Body() dto: CreateStocksDto[]) {
        return this.stocksService.createStocks(dto)
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Stocks] })
    @Post('/destroy')
    destroy() {
        return this.stocksService.destroyStocks()
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Stocks] })
    @Get('/pricePer')
    getAvgPrice() {
        return this.stocksService.getPricePer()
    }

}
