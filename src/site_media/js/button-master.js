$(function() {
  $( "#button" ).click(function(e) {
    e.preventDefault();
    $( "#button" ).addClass("onclic");
    $( "#button" ).addClass("begin");
    invalidate();
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "begin" );
      $( "#button" ).addClass("stoped");
      
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate");
    }, 1000 );  
    

    

    
  }


  function invalidate() {
    setTimeout(function() {
      
      $( "#button" ).removeClass( "begin" );
       $( "#button" ).addClass( "invalidate");
      callback();
      
      
    }, 3000 );

  }

    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).removeClass( "validate" );
        $( "#button" ).removeClass( "invalidate" );
      }, 500 );
    }
  });