'use strict';
$(document).ready(function(){
  // DOM traversal
  // When your browser reads your HTML file
  // It returns it one of the elements you made into
  // elements in the browser that javascript can talk to
  // When the browser reads all three technologies (HTML / CSS / JS)
  // Creates the DOM and renders it for the viewer to see.
  // You're not interacting with HTML code
  // You're interacting with what JS built with your code

  // eq gives you the index
  // $('ul:first').children();
  // $('li:first').siblings();
  // $('li:first').parent();
  // $('li').eq(4).parent();
  // $('li').eq(4).parent().parent(); Gives you the li that the ul is inside of li > ul.sublist > li
  // $('li').eq(4).parent().parent().prev(); <li>three</li>

  // $('li').on('click', function(){
    // $(this).next().remove();
    // $(this).removeClass('special');
    // $(this).siblings().addClass('special');
    // $(this).parent().addClass('special');
    // $(this).closest('.list').addClass('special');
  // });

  // $('.list').on('click', function() {
    // $(this).find('li').filter(':first').addClass('special');
    // $(this).find('li').filter('.special').remove();

    // easier way
    // using find is effecient javascript usage. Very fast bc it
    // isn't having to look through all your code
  //   $(this).find('.special').remove();
  // });

  // $('li').on('click', function() {
  //   $(this).hide();
    // if( $(this).is('.special')) {
    //   alert('special');
    // }

    // if ($(this).not('.special')) {
    //   alert('not special');
    // }
  // });

  $('.sublist li').on('click', function() {
    if($(this).parent().is('.sublist')) {
      $(this).hide();
    }
  });


});
