import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findByFilter(brand?: string, model?: string, year?: number): Promise<Car[]> {
    const query = this.carRepository.createQueryBuilder('car');
    if (brand) query.andWhere('car.brand = :brand', { brand });
    if (model) query.andWhere('car.model = :model', { model });
    if (year) query.andWhere('car.year = :year', { year });
    return query.getMany();
  }

  addCar(car: Partial<Car>): Promise<Car> {
    const newCar = this.carRepository.create(car);
    return this.carRepository.save(newCar);
  }

  rateCar(id: number, rating: number): Promise<Car> {
    return this.carRepository.findOneBy({ id }).then((car) => {
      car.rating = rating;
      return this.carRepository.save(car);
    });
  }
}
