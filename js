$(function() {
    $( "#draggable" ).draggable({ 
      revert: "invalid",
      helper: "clone",
    });
    $( "#draggable2" ).draggable({ 
      revert: "invalid",
      helper: "clone",
    });
 
    $( "#droppable" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
      $(ui.draggable.clone())
          revert: true, // bounce back when dropped
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
});
