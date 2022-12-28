import { RootEntity } from '../../../../database/entities/root.entity';
import { Column, Entity } from 'typeorm';

@Entity('apartments')
export class ApartmentEntity extends RootEntity {
  @Column({
    unique: true,
  })
  apartment_id: string;

  @Column({
    nullable: true,
  })
  title: string;

  @Column({
    nullable: true,
  })
  link: string;
}
