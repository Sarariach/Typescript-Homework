import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsIn } from 'class-validator'
// import {colors} from './controller'


@Entity()

export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  
  @Column('text', {nullable:true})
  color: string 

  @Column('json', {nullable:true})
  board: JSON


}


// export const setColor = () => {
//   const colors= ["Red", "Blue", "Yellow", "Green", "Magenta"]
//   .catch()
//   return colors[Math.floor(Math.random()* colors.length)]
// }

// export const newBoard = () => {
//    const defaultBoard = [
//     ['o', 'o', 'o'],
//     ['o', 'o', 'o'],
//     ['o', 'o', 'o']
//   ]
//   const startBoard =JSON.stringify(defaultBoard)
//   let newnewBoard= JSON.parse(startBoard)
//   return newnewBoard
// }
  // async setPassword(rawPassword: string) {
  //   const hash = await bcrypt.hash(rawPassword, 10)
  //   this.password = hash
  // }
  






// Math.floor(Math.random() * myArray.length);






























// async setColor(rawColor: string) {
//   const colors = ["Red", "Blue", "Yellow", "Green", "Magenta"]
//   const colors1 = await Math.floor(Math.random() * colors.length)
//   this.color = colors1