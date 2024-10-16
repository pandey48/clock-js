var wake =document.getElementById("wakeTime");
var lunch = document.getElementById("lunchTime");
var nap = document.getElementById("napTime");
var night = document.getElementById("nightTime");
function changeTime(){
  
  document.getElementById("lblWake").innerText = (" Wake up time : ")+ wake.options[wake.selectedIndex].text;
  document.getElementById("lblLunch").innerText = ("lunch time: ")+lunch.options[lunch.selectedIndex].text ;
 document.getElementById("lblNap").innerText = ("Nap time : ") + nap.options[nap.selectedIndex].text;
 document.getElementById("lblNight").innerText = (" sleep time : ")+night.options[night.selectedIndex].text;

} 




 var hrs;
 
  function updateTime() {
    const now = new Date();
   
   
   //var curent=now.setHours(14);
   hrs= now.getHours();
   
  
    
   
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById('timeClock').textContent =` Time ${now.toLocaleTimeString(undefined, options)}` 
  }
setInterval(updateTime, 1000);
updateTime();

//alert(hrs); 
function setAlarm(){
  let waketime=Number(wake.value);
  let lunchtime=Number(lunch.value);
  let naptime=Number(nap.value);
  let nighttime=Number(night.value);
  
  

 if(hrs== waketime){
  
  
  
  document.getElementById("showTask").innerText = " Good morning!! wake UP"
  document.getElementById("imgTItle").innerText = " wake up time "
  document.getElementById("img").innerHTML = ` <img src="../image/1090741.jpg" alt="" height="200px" width="400px">`
 
 }
 else if(hrs==lunchtime){
  document.getElementById("showTask").innerText = " good afernoon!! "
  document.getElementById("imgTItle").innerText = " plese take a lunch"
  document.getElementById("img").innerHTML = ` <img src="../image/text-lunch-time-spoon-fork-green-background-lunch-time-concept-126263241.webp" alt="" height="200px" width="400px">`
  
 }
 else if(hrs==naptime){
  
   document.getElementById("showTask").innerText = " good evning!! "
  document.getElementById("imgTItle").innerText = " nap time"
  document.getElementById("img").innerHTML = ` <img src="../image/boy-listening-to-music-24380413.webp" alt="" height="200px" width="400px">`

}
else if(hrs==nighttime){
   document.getElementById("showTask").innerText = " good night!! "
  document.getElementById("imgTItle").innerText = " go to bed and sleep"
  document.getElementById("img").innerHTML =` <img src="../image/istockphoto-1351440122-1024x1024.jpg" alt="" height="200px" width="400px"> `

}
         


}
setAlarm();



