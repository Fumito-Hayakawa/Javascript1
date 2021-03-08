function start() {
  timer = setInterval("countUp()", 100);

  $("#startButton").attr('disabled','disabled');
  $("#stopButton").removeAttr('disabled');
  $("#resetButton").removeAttr('disabled');
}


function stop(){
  clearInterval(timer);
  
  $("#startButton").removeAttr('disabled');
  $("#stopButton").attr('disabled','disabled');

};

function reset(){
  clearInterval(timer);
  msec = 0
  sec = 0
  min = 0
  hour = 0
  $('.time').html('0:0:0:0');
  
  $("#startButton").removeAttr('disabled');
  $("#stopButton").attr('disabled','disabled');
  $("#resetButton").attr('disabled','disabled');

}

// 0からスタートするため
var msec = 0;
var sec  = 0;
var min  = 0;
var hour = 0;


function countUp() {

  msec += 1;
  
  if (msec > 9) {
    msec = 0;
    sec += 1;
  }
  
  if (sec > 59) {
    sec = 0;
    min += 1;
  }
  
  if (min > 59) {
    min = 60;
    hour += 1
  }
  
  // 出力
   $('.time').html(hour+":"+min+":"+sec+":"+msec); 

}

