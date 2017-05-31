/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa',
    density: 30000,
    parallax: true,
    curvedLines: false,
    particleRadius: 1,
    lineWidth: 0.5,
    minSpeedX: 1,
    minSpeedY: 1,
    directionX: 'center',
    directionY: 'center'
  });
  var intro = document.getElementById('404');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
