//variable to change from celsius fahrenheit
var u = "imperial"
var con = ['Clouds','Clear','	Thunderstorm','Rain','Snow','Mist','heavy thunderstorms','Haze','Smoke']
var x = document.createElement("IMG");
x.style.height = "60px";
x.style.position = "fixed";
x.style.margin = "-90px 150px -275px 360px";
const apikey = '22b959f71d46abdf0279d7ecc364b638'
//getting the location from either city name or zipecode
async function location1() {
    var cityname = document.getElementById("city").value;
    document.getElementById("location").innerHTML = cityname;

   var url2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=${u}`;
    
    if (cityname.includes(',')){
      var a = cityname.split(',');
      var cityname = a[0];
      var statec = a[1]
      document.getElementById("location").innerHTML = cityname + ","+ statec;

      var url2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname},${statec},{country code}&appid=${apikey}&units=${u}`;
   

    }
     else if (cityname.match(/[0-9]/)){
       
      var cityname= parseInt(document.getElementById("city").value);
        var url2 =`http://api.openweathermap.org/data/2.5/weather?zip=` + cityname + `,us&appid=${apikey}&units=${u}`;
        
     
    await fetch (`http://api.openweathermap.org/geo/1.0/zip?zip=${cityname}&appid=${apikey}`);
      var d = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${cityname}&appid=${apikey}`)
      var e = d.json()
     
      fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${cityname}&appid=${apikey}` )
      .then((response) => response.json()) 
      .then((place) => {
        document.getElementById("location").innerHTML = place.name;
      });
      
       
       
      
        
        
        
      
       
        
        
      
    }
   
     var w = await fetch(url2);
     var q = await w.json();
    
   console.log(q)
     document.getElementById("main").innerHTML =  Math.round(JSON.parse(q.main.temp)) + "°"; 
    
     document.getElementById("Min").innerHTML =  Math.round(JSON.parse(q.main.temp_min)) + "°";
     document.getElementById("Max").innerHTML =  Math.round(JSON.parse(q.main.temp_max)) + "°";

     document.getElementById("feels").innerHTML =  JSON.parse(q.main.feels_like) + "°";
     document.getElementById("press").innerHTML = "Pressure" + " " + ":" + JSON.stringify( q.main.pressure);
     document.getElementById("wind").innerHTML = "Wind" + " " + ":" +"Speed" +  " "+ JSON.stringify( q.wind.speed);
     document.getElementById("gust").innerHTML = "Gusts" + " "+ " " + JSON.stringify( q.wind.gust);
     let des = q.weather[0].main;
     var sunset =(q.sys.sunset);
     var sunsettime = new Date(sunset * 1000);
     var ba = sunsettime.getHours();
     var min1 = sunsettime.toLocaleString("en-us", { hour: '2-digit', minute: '2-digit', second: "2-digit"});
     
     


    var sunrise = (q.sys.sunrise);
    var sunrisetime = new Date(sunrise * 1000);
    var min2 = sunrisetime.toLocaleString("en-us", { hour: '2-digit', minute: '2-digit', second: "2-digit"});
    
    document.getElementById("sys").innerHTML =  "Sunset:" + min1;
     document.getElementById("sys1").innerHTML =  "Sunrise:" + min2; 

     document.getElementById("des").innerHTML = JSON.stringify(des);
    
 
  
   
  




document.body.appendChild(x);
   if(des == con[0]){
     x.setAttribute("src","clouds.png")
    
     
   }
   else if(des == con[1]) {
     x.setAttribute("src","clear.png")
     
   
   
   }
   else if (des == con[2]){
     x.setAttribute("src","thunder.png")
   }
   
   
   
   
   else if (des ==con[3]){
   x.setAttribute("src",'rain.png')
   }
   else if (des===con[4]){
     x.setAttribute("src",'snow.png')
   }
   else if(des==con[5]){
     x.setAttribute("src","mist.png")
   }
   else if(des==con[6]){
     x.setAttribute("src","heavythunder.png")
   }
   else if(des==con[7]){
    x.setAttribute("src","mist.png")
   }
   else if(des==con[8]){
    x.setAttribute("src","mist.png")


   }
   }

   document.getElementById("main").appendChild(x)

   

  function toggleCheck() {
    if(document.getElementById("check").checked === true){
     u = "imperial";
    
     document.getElementById("main").innerHTML = Math.round((parseInt(document.getElementById("main").innerHTML) * 1.8) + 32) + "°" ;
     document.getElementById("Min").innerHTML = Math.round((parseInt(document.getElementById("Min").innerHTML) * 1.8) + 32) + "°";
     document.getElementById("Max").innerHTML = Math.round((parseInt(document.getElementById("Max").innerHTML) * 1.8) + 32) + "°";

     document.getElementById("feels").innerHTML =  Math.round((parseInt(document.getElementById("feels").innerHTML) * 1.8) + 32) + "°";
    

  
  }
  else {
    u = "metric";
    document.getElementById("main").innerHTML =  Math.round((parseInt(document.getElementById("main").innerHTML) -32) * 5/9) + "°"  ;
    document.getElementById("Min").innerHTML = Math.round((parseInt(document.getElementById("Min").innerHTML) -32) * 5/9)  + "°" ;
     document.getElementById("Max").innerHTML = Math.round((parseInt(document.getElementById("Max").innerHTML) -32) * 5/9)  + "°" ;

     document.getElementById("feels").innerHTML =  Math.round((parseInt(document.getElementById("feels").innerHTML) -32) * 5/9)  + "°" ;
    

    


  }
  
  }
  

//setting default weather

location1();
document.getElementById("main").style.marginRight = "250px";

const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20;
if(isDayTime === true){
  document.body.style.background = "#f3f3f3 url('day.jpg') no-repeat right top";
  document.body.style.backgroundSize = "1600px 900px";
} else {
  document.body.style.background = "#f3f3f3 url('night.jpg') no-repeat right top";
  document.body.style.backgroundSize = "1600px 900px";

}


    






