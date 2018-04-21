import {Controller, Get, Post, Body, HttpCode} from 'routing-controllers'
import Game from './entity'

@Controller()
export default class GameController {

    @Get('/games/')
    async allGames() {
      const games = await Game.find()
      return {games}
    }
    
    @Post('/games')
    @HttpCode(201)
    async createGame(
      @Body () game: Game
      // const new games = 
    ) {
      return game.save()
    }

    
  }

    





























  // const colors = ["Red", "Blue", "Yellow", "Green", "Magenta"]
  //     const entity = Game.create(colors)
  //     await entity.setGame(color)
  //     return game.save()