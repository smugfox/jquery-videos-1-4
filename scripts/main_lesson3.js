'use strict';
$(document).ready(function(){

  // DRY jQuery

  /*
    * We're going to listen to any panel button
    * When you click on it, it's going to grab
    * the panelid out of that button
    * It'll then find that panel and toggle it
  */
  var content = 'My New Awesome Content!';

  $('.panel-button').on('click',function(){
    var panelId = $(this).attr('data-panelid');
    $('#' + panelId).toggle();
    $('#' + panelId + ' .panel-body').html(content);
  });
});
