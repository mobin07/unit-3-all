


function getData(){
    let city=document.getElementById('city').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd7770efb029a77e37571ec302a1fcd3`;
    const url2=`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=fd7770efb029a77e37571ec302a1fcd3`;

    fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function (res){
        // console.log(res.main.temp);
        console.log(res);
        append(res);
    })
    .catch(function (err){
        console.log('err:',err);
    })


}

function append(data){
    let container=document.getElementById('container');
    let map=document.getElementById('gmap_canvas');
    container.innerHTML='';

    let city=document.createElement('p');
    city.innerText=`City: ${data.name}`;

    let min=document.createElement('p');
    min.innerText=`Min temp: ${data.main.temp_min}`;

    let max=document.createElement('p');
    max.innerText=`Max city: ${data.main.temp_max}`;

    let current=document.createElement('p');
    current.innerText=`Current Temp: ${data.main.temp}`;

    let humidity=document.createElement('p');
    humidity.innerText=`humidity: ${data.main.humidity}`;

    container.append(city,min,max,current,humidity);

    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}

function getWeather(){


navigator.geolocation.getCurrentPosition(success);
function success(position) {
    var crd = position.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getData2(crd.latitude,crd.longitude);

  }
}
function getData2(lat,lon){
    // let city=document.getElementById('city').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fd7770efb029a77e37571ec302a1fcd3`;

    fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function (res){
        // console.log(res.main.temp);
        console.log(res);
        append(res);
    })
    .catch(function (err){
        console.log('err:',err);
    })


}

fetch(url2)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log('err:',err);
    })
