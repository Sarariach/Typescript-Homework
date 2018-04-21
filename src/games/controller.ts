import {Controller, Get, Post, HttpCode} from 'routing-controllers'
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
    }

