function showTime(){
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();
  let session = 'AM';
  
  
  if(hours == 0) {
    hours = 12;
  }
  
  if(hours > 12){
    hours = hours - 12;
    session = 'PM';
  }
  
  hours = (hours < 10) ? "0" + hours : hours;
  mins = (mins < 10) ? "0" + mins : mins;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  
  let time = hours + ":" + mins + ":" + seconds + " " + session;
  
  let MyClockDisplay = document.getElementById('MyClockDisplay');
  MyClockDisplay.innerHTML = time;
  setTimeout(showTime, 1000)
}


showTime()
