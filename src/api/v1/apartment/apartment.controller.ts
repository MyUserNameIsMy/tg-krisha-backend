import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApartmentEntity } from './entities/apartment.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Apartment')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  async create(
    @Body() createApartmentDto: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    return await this.apartmentService.create(createApartmentDto);
  }

  @Post('filter')
  async filter(
    @Body() createApartmentsDto: CreateApartmentDto[],
  ): Promise<any> {
    return await this.apartmentService.filter(createApartmentsDto);
  }

  @Get()
  async findAll(): Promise<ApartmentEntity[]> {
    return await this.apartmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ApartmentEntity> {
    return await this.apartmentService.findOne(+id);
  }
}
