
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Sample extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
