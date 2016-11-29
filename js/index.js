$(document).ready(function() {

  var clock = $('.your-clock').FlipClock(10,{
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false,
    callbacks: {
      stop: function() {
        alert("Time's up yo!");
      },
    },
    
  });
  
  console.log(clock);

  $("#start").on('click', function() {
    clock.start();
  });

  $("#addTime").on('click', function() {
    clock.time.addSeconds(61);
    clock.setTime(clock.time.time);
  });
  
  $('#subtractTime').click(function() {
    clock.time.subSeconds(59);
    clock.setTime(clock.time.time);
  });
});