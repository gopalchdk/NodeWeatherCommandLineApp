const request = require('request');

var getWeather = (latitude,longitude,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/6b985a989e1b7ab7ee8c2f46b0eb3c8d/${latitude},${longitude}`,
        json:true
    },(error,response,body)=>{
      if(error){
          callback('Unabale to connect to weather API');
      }else if(body.code===400){
          callback(body.error);
         
      }else if(response.statusCode===200){
          callback(undefined,{
              temperature:body.currently.temperature
            });
      }
    });
    
}

module.exports.getWeather = getWeather;


