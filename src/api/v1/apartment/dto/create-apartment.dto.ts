import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateApartmentDto {
  @ApiProperty({
    description: 'The apartment id',
    type: 'string',
    name: 'apartment_id',
    example: '123456',
  })
  @IsNotEmpty()
  apartment_id: string;

  @ApiProperty({
    description: 'Title',
    type: 'string',
    name: 'title',
  })
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'Link',
    type: 'string',
    name: 'link',
  })
  @IsOptional()
  link?: string;
}
