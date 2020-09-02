import * as restify from 'restify'

export const serverInstance = restify.createServer({
            name: 'my-rest-api',
            version: '1.0.0',
            ignoreTrailingSlash: true
        })       

serverInstance.use(restify.plugins.bodyParser())

serverInstance.listen(3000, ()=>{
    console.log('API is running on port 3000')
})