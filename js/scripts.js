$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    //Business Logic

    var puzzles = $("input#puzzleString").val();



    //User Interface
// THIS IS THE SPLIT/JOIN METHOD OF REPLACING CHARACTERS IN STRING //

    if (puzzles.length === 0){
      alert("Please enter text for a puzzle")
    } else {
      for ( let i = 0; i < puzzles.length; i ++) {
        var tokens = puzzles.split('a').join("-").split('e').join("-").split('i').join('-').split('o').join('-').split('u').join("-");
        console.log(tokens);
        $(".generator").hide();
        $(".result").text(tokens);
      }
    };


// THIS IS THE REGEX WAY OF REPLACING CHARACTERS IN STRING//

   // for ( let i = 0; i < puzzles.length; i ++) {
   //  var tokens = puzzles.replace(/a|e|i|o|u/g, "-");
   //   console.log(tokens);
   //   $(".generator").hide();
   //   $(".result").text(tokens);
   // }




});

});
