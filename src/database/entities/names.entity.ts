import { Column } from 'typeorm';
import { RootEntity } from './root.entity';

export abstract class NamesEntity extends RootEntity {
  @Column('varchar', { length: 200, unique: true })
  name_kk: string;
  @Column('varchar', { length: 200, unique: true })
  name_ru: string;
  @Column('varchar', { length: 200, unique: true })
  name_en: string;
}
