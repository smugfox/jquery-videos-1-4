'use strict';
$(document).ready(function(){

  $('.tab-panels .tabs li').on('click', function(){

    var $panel = $(this).closest('.tab-panels'); //When you click on an li, it'll find the cloest tab-panels that it's a part of

    $panel.find('.tabs li.active').removeClass('active');
    $(this).addClass('active');

    // figure out which panel to show
    var panelToShow = $(this).attr('rel');

    // hide current panel
    // callback = it's going to wait till slideUp for 300ms, and then it will fire our function

    $panel.find('.panel.active').slideUp(300, showNextPanel);

    // Show next panel
    function showNextPanel() {
      $(this).removeClass('active');

      $('#' + panelToShow).slideDown(300, function() {
        $(this).addClass('active');
      });
    }
  });
});

// Recap
// We're listening to any tab-panels tabs li's that get clicked on
// As soon as it is clicked, we're going to find our closest tab-panels and save it to a variable
// We're going to find whichever li tab is active and remove it's active class
// And add the class of active to whichever got clicked
// Then we're going to find which panel to Show by finding the rel
// We're going to find the panel with an active class
// We're going to slide that up
// Once that's up, we're going to run showNextPanel
// showNextPanel removes class of active from previous panel
// We're going to slide down the panelToShow
// and add the class of active to it
