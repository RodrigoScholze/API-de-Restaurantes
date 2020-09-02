import * as mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/DatasetRestaurants', {useNewUrlParser: true, useUnifiedTopology: true})

const Schema = new mongoose.Schema({
  address: {
            type: Object,
            required: true
           },
  borough: {
            type: String,
            required: true
           },
  cuisine: {
            type: String,
            required: true
           },
  grades: {
            type: Array,
            required: false
          },
  name:   {
            type: String,
            required: true
          },
  restaurant_id: {
                  type: String,
                  required: false
                 }
})
      
export const mongoModel = mongoose.model('restaurants', Schema)