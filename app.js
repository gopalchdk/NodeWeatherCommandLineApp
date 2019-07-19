const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const weather = require('./weather/weather.js');

var argv = yargs
   .options({
       a:{
           alias:'address',
           demand:true,
           string:true
       }
   })
   .help()
   .alias('help','h')
   .argv;

geocode.geocodeAddress(argv.address,(errorResult,body)=>{
   if(errorResult){
       console.log(errorResult);
   }else{
       
       weather.getWeather(body.latitude,body.longitude,(error,data)=>{
          if(error){
              console.log(error);
          }else{
              console.log(`It's currently ${data.temperature}`);
          }
       });
       console.log(body.address);
   }
});



