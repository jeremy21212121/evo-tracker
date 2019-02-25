'use strict';
const request = require('request');
const apiUrl = 'https://evo.ca/api/Cars.aspx';

const mongoose = require('mongoose');
const dbConfig = require('./config/db.js');

const Car = require('./models/car.js');

const getCurrentCars = () => {

  request( apiUrl, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const evo = JSON.parse(body);
      if ( evo.success && !evo.error ) {
        // console.log(currentCars[0].Name,currentCars.length);
        const now = new Date();
        const newRecord = new EvoRecord({
          date: now,
        });


        evo.data.forEach( record => {

          const newCar = new Car({
            plate: record.Name,
            vin: record.Id,
            fuel: record.Fuel,
            lat: record.Lat,
            lon: record.Lon,
            address: record.Address
          });
          newCar.save(err=>{
            if (err) throw err;
          });
        })
      } else {
        console.log('Error: JSON response has "success:false" or "error:true" ');
      }
    } else {
      console.log('Got an error: ', error, ', status code: ', response.statusCode);
    }
  })
}

mongoose.connect(dbConfig.url)
.then( () => {
  console.log('Connected to DB');
}).catch( err => {
  console.log('Error connecting to DB, exiting');
  process.exit();
});

getCurrentCars();
// request( apiUrl, (error, response, body)=> {
//   if (!error && response.statusCode === 200) {
//     const evo = JSON.parse(body)
//     console.log('Got a response: ', `${evo.data.length} cars found at ${new Date().toString()}`);
//   } else {
//     console.log('Got an error: ', error, ', status code: ', response.statusCode);
//   }
// })
