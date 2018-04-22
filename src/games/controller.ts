import {JsonController, Get, Post, BodyParam, Body, HttpCode, NotFoundError, Param, Put,} from 'routing-controllers'
import Game from './entity'
// import {setColor, newBoard} from './entity'


@JsonController()
export default class GameController {

    @Get('/games/')
    async allGames() {
      const games = await Game.find()
      return {games}
    }
    
    @Post('/games')
    @HttpCode(201)
    async createGame(
      @Body () game: Game,
    ) {
      const setColor = () => {
        const colors= ["Red", "Blue", "Yellow", "Green", "Magenta"]
        return colors[Math.floor(Math.random()* colors.length)]
      }
        const newBoard = () => {
        const defaultBoard = [
         ['o', 'o', 'o'],
         ['o', 'o', 'o'],
         ['o', 'o', 'o']
       ]
       const startBoard =JSON.stringify(defaultBoard)
       let newnewBoard= JSON.parse(startBoard)
       return newnewBoard
      }
      game.color = setColor()
      game.board = newBoard()
    return game.save()
    }

    @Put('/games/:id')
    async updateGame(
      @Param('id') id:number,
      @Body() update: Partial <Game>
    ) {
      const game = await Game.findOne(id)
      if (!game) throw new NotFoundError('Cannot find game')

      return Game.merge(game, update).save()
    }
  }

    





























  // const colors = ["Red", "Blue", "Yellow", "Green", "Magenta"]
  //     const entity = Game.create(colors)
  //     await entity.setGame(color)
  //     return game.save()