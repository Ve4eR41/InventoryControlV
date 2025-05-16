import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Shipments } from './shipments.model';
import { ShipmentsService } from './shipments.service';
import { CreateShipmentsDto } from './dto/CreateShipmentsDto';
import { FilterShipmentsDto } from './dto/FilterShipmentsDto';

@Controller('shipments')
export class ShipmentsController {

    constructor(private shipmentsService: ShipmentsService) { }


    @ApiOperation({ summary: 'тестовый запрос для проверки того что все работает' })
    @Get("/test")
    getTest() {
        return "Hello ! ShipmentsController"
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Shipments] })
    @Get("/all")
    getAll() {
        return this.shipmentsService.getAll()
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Shipments] })
    @Post()
    create(@Body() dto: CreateShipmentsDto[]) {
        return this.shipmentsService.create(dto)
    }



    @ApiOperation({ summary: '...' })
    @ApiResponse({ status: 200, type: [Shipments] })
    @Post("/getByName")
    getByName(@Body() dto: FilterShipmentsDto) {
        return this.shipmentsService.getByName(dto)
    }
}
