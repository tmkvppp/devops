import { Controller, Get, Post, Query, Body, Param, Patch } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.entity';

@Controller('/cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll(@Query('brand') brand: string, @Query('model') model: string, @Query('year') year: number) {
    return this.carsService.findByFilter(brand, model, year);
  }

  @Post()
  addCar(@Body() car: Partial<Car>) {
    return this.carsService.addCar(car);
  }

  @Patch(':id/rate')
  rateCar(@Param('id') id: number, @Body('rating') rating: number) {
    return this.carsService.rateCar(id, rating);
  }
}
