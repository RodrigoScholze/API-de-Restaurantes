import {serverInstance} from './server'
import {Routers} from './controller'
import {mongoModel} from './model'

const routersInstance = new Routers(serverInstance, mongoModel)
routersInstance.initRouters()