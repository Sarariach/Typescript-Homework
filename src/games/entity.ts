import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsIn } from 'class-validator'

export const colors = ["Red", "Blue", "Yellow", "Green", "Magenta"]

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @IsIn(colors)	
  @Column('text', {default:false})
  color: string

  @Column('json', {nullable:false})
  board: string []


}










// Math.floor(Math.random() * myArray.length);






























// async setColor(rawColor: string) {
//   const colors = ["Red", "Blue", "Yellow", "Green", "Magenta"]
//   const colors1 = await Math.floor(Math.random() * colors.length)
//   this.color = colors1