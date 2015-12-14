'use strict';
$(document).ready(function(){
  // $('#btn1').html('my button');
  //click is a javascript event name
  // $('#btn1').on('mouseover', function() {
  //   $('#panel1').fadeOut(200);
  // });
  //
  // $('#btn2').on('mouseover', function() {
  //   $('#panel2').fadeOut(200);
  // });
  //
  // $('#btn3').on('mouseover', function() {
  //   $('#panel3').fadeOut(200);
  // });
  //
  // $('#btn4').on('mouseover', function() {
  //   $('#panel4').fadeOut(200);
  // });
  //
  // $('#btn1').on('click', function() {
  //   $('#panel1').fadeIn(200);
  // });
  //
  // $('#btn2').on('click', function() {
  //   $('#panel2').fadeIn(200);
  // });
  //
  // $('#btn3').on('click', function() {
  //   $('#panel3').fadeIn(200);
  // });
  //
  // $('#btn4').on('click', function() {
  //   $('#panel4').fadeIn(200);
  // });


  $('#btn1').on('click', function() {
     $('#panel1 .panel-body').html('My new panel content');
  });


});
