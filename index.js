let Input = document.querySelector("#input");
let imag = document.querySelector(".Image");
let Information = document.querySelector("#Information");
let place = document.querySelector(".place");
let btn = document.querySelector("#btn");
let Locations = document.querySelector(".Location");
let sunrise = document.querySelector(".sunrise");
let sunset = document.querySelector(".sunset");
let feels_like = document.querySelector(".feels_like");
let pressure = document.querySelector(".pressure");
let humidity = document.querySelector(".humidity");
let main = document.querySelector(".main");
let description = document.querySelector(".description");
let windSpeed = document.querySelector(".windSpeed");
let minTemp = document.querySelector(".minTemp");
let maxTemp = document.querySelector(".maxTemp");

Input.addEventListener("input", async function () {
  valueOfInput = Input.value;
  if (valueOfInput.length > 0) {
    Information.style.display = "flex";
    try {
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${valueOfInput}&appid=ca56e32bc460c2d1616242de119e8bb9&units=metric`
        // "https://api.openweathermap.org/data/2.5/weather?q={city name} &appid=            {API key}           &units=metric"
      );
      let result = await data.json();
      console.log(result);
      let icon = result.weather[0].icon;
      imag.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      let myDate = new Date();
      let sun = result.sys.sunrise;
      myDate.setTime(sun);
      sunrise.textContent =
        myDate.getFullYear() +
        "/" +
        myDate.getMonth() +
        "/" +
        myDate.getDate() +
        " - " +
        myDate.getHours() +
        ":" +
        myDate.getMinutes() +
        ":" +
        myDate.getSeconds();

      let myDates = new Date();
      let suns = result.sys.sunset;
      myDates.setTime(suns);
      sunset.textContent =
        myDates.getFullYear() +
        "/" +
        myDates.getMonth() +
        "/" +
        myDates.getDate() +
        " - " +
        myDates.getHours() +
        ":" +
        myDates.getMinutes() +
        ":" +
        myDates.getSeconds();

      Locations.textContent = result.name;
      feels_like.textContent = result.main.feels_like;
      pressure.textContent = result.main.pressure;
      humidity.textContent = result.main.humidity;
      main.textContent = result.main.temp;

      description.textContent = result.weather[0].description;
      windSpeed.textContent = result.wind.speed;
      minTemp.textContent = result.main.temp_min;
      maxTemp.textContent = result.main.temp_max;
    } catch (error) {
      console.log(error.message);
    }
  } else {
    Information.style.display = "none";
  }
});
