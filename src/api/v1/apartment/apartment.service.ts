import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApartmentEntity } from './entities/apartment.entity';
import { In } from 'typeorm';

@Injectable()
export class ApartmentService {
  async _findOne(id: number): Promise<ApartmentEntity | undefined> {
    const apartment = await ApartmentEntity.findOne({ where: { id: id } });
    if (!apartment) throw new NotFoundException('Client not found');
    return apartment;
  }

  async create(
    createApartmentDto: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    const apartment = new ApartmentEntity();
    Object.assign(apartment, createApartmentDto);
    await apartment.save();
    return apartment;
  }

  async filter(foundApartments: CreateApartmentDto[]): Promise<any> {
    const apartments = await ApartmentEntity.find({
      where: {
        apartment_id: In(foundApartments.map((item) => item.apartment_id)),
      },
    });
    console.log('-'.repeat(10));
    console.log(foundApartments);
    console.log('-'.repeat(10));

    console.log('-'.repeat(10));
    console.log(apartments);
    console.log('-'.repeat(10));

    const new_apartments: CreateApartmentDto[] = foundApartments.filter(
      (item) =>
        apartments
          .map((value) => value.apartment_id)
          .indexOf(item.apartment_id) === -1,
    );

    for (const apartment of new_apartments) {
      await this.create(apartment);
    }

    console.log('-'.repeat(10));
    console.log(new_apartments);
    console.log('-'.repeat(10));
    return new_apartments;
  }
  async findAll(): Promise<ApartmentEntity[]> {
    return await ApartmentEntity.find();
  }

  async findOne(id: number) {
    return await this._findOne(id);
  }
}
