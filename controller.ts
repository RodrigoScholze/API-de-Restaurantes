export class Routers {
    private server: any;
    private model: any;
  
    constructor(serverInstance: any, modelInstance: any) {
      this.server = serverInstance;
      this.model = modelInstance;
    }

    public initRouters(){

        this.server.get('/name/:name', (req, resp, next)=>{
            this.model.findOne({name: req.params.name}).then(data=>{
                if(data != null){
                    resp.json(data)
                }else{
                    resp.status(404)
                    resp.json({errorMessage: '404 - Not Found'})
                }
            })
            return next()
        })

        this.server.get('/cuisine/:cuisine', (req, resp, next)=>{
            this.model.find({cuisine: req.params.cuisine}).then(data=>{
                if(data.length > 0){
                    resp.json(data)
                }else{
                    resp.status(404)
                    resp.json({errorMessage: '404 - Not Found'})
                }
            })
            return next()
        })

        this.server.get('/borough/:borough', (req, resp, next)=>{
            this.model.find({borough: req.params.borough}).then(data=>{
                if(data.length > 0){
                    resp.json(data)
                }else{
                    resp.status(404)
                    resp.json({errorMessage: '404 - Not Found'})
                }
            })
            return next()
        })

        this.server.get('/street/:street', (req, resp, next)=>{
            this.model.find({"address.street": req.params.street}).then(data=>{
                if(data.length > 0){
                    resp.json(data)
                }else{
                    resp.status(404)
                    resp.json({errorMessage: '404 - Not Found'})
                }
            })
            return next()
        })

        this.server.post('/register', (req, resp, next)=>{
            let Model = new this.model(req.body)
            Model.save().then(data=>{
                resp.json(data)
            }).catch(error=>{
                resp.status(400)
                resp.json({errorMessage: error.message})
            })
            return next()
        })

        this.server.del('/delete/:name', (req, resp, next)=>{
            this.model.deleteOne({name: req.params.name}).then(delResult=>{
                if(delResult.deletedCount > 0){
                    resp.json({message: 'Deleted restaurant'})
                }else{
                    resp.status(404)
                    resp.json({errorMessage: '404 - Not Found'})
                }
            })
            return next()
        })
    }
}
