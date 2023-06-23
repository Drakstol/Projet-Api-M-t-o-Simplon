const APIKEY ='647735ddade7fbe4d781465f74d97188';

let url ='https://api.openweathermap.org/data/2.5/weather?q=Fontainebleau&appid=647735ddade7fbe4d781465f74d97188&units=metric&lang=fr'

fetch(url).then(Response=> 
  Response.json().then(data => {
  console.log(data);
 document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-half'></i>" + data.main.temp + '°C';
  document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed +'km/h';
 document.querySelector('#humidity').innerHTML = "<i class='fa-regular fa-droplet-degree'></i>" +data.main.humidity + '%';
  }) 
);

//setTimeout()

setInterval(() => {
  console.log("temp");
  }, 3600);

  setInterval(() => {
    console.log("wind");
    }, 3600);

    setInterval(() => {
      console.log("humidity");
      }, 3600);
      