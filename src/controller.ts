import {Controller, Get} from 'routing-controllers'
import Game from './games/entity'

@Controller()
export default class MainController {

    @Get("/hello")
    main() {
       return {
         hello: 'World'
       }
    }

}