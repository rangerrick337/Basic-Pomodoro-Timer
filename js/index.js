$(document).ready(function() {

  var MINUTE = 60;
  var DEFAULT_SECONDS = 1500;  // sets 25 minutes to the clock by default
  var audio = new Audio('audio/sound.mp3');

  var clock = $('.your-clock').FlipClock(DEFAULT_SECONDS,{
    clockFace: 'MinuteCounter',
    countdown: true,
    autoStart: false,
    callbacks: {
      /*
      * the stop callback is called at the start of the last animation,
      * the setTimeout method below waits for the time of the last animation
      * to finish before firing the alert, a hack but it works
      */

      stop: function() {
        setTimeout(function() {
            audio.play();
            alert("Time's up yo!");
          }, clock.time.animationRate);
        },
      },
    });

  $("#start").on('click', function() {
    clock.start();
  });

  $("#addTime").on('click', function() {
    clock.time.addSeconds(MINUTE);
    clock.setTime(clock.time.time);
    clock.time.addSecond();
  });

  $('#subtractTime').click(function() {
    clock.time.subSeconds(MINUTE);
    clock.setTime(clock.time.time);
    clock.time.addSecond();
  });

  $('#reset').click(function() {
    clock.stop();
    clock.setTime(DEFAULT_SECONDS);
  });
});
