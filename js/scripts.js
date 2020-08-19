$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    const puzzleInput = $("input#puzzleString").val();
    const puzzleArray = puzzleInput.toLowerCase().split("")

    function replaceVowels() {
      let newArray = []

      if (puzzleInput.length === 0){
        alert("Please enter a sentence!")
      } else {
        for (let i = 0; i < puzzleArray.length; i ++) {
          if (puzzleArray[i].includes("a") || puzzleArray[i].includes("e") || puzzleArray[i].includes("i") || puzzleArray[i].includes("o") || puzzleArray[i].includes("u")) {
            newArray.push("-")
          } else {
            newArray.push(puzzleArray[i])
          }
        }
      }
        return newArray.join(" ")
    };

    $(".generator").hide();
    $(".result").text(replaceVowels(puzzleInput));

    });
  });

// THIS IS THE REGEX WAY OF REPLACING CHARACTERS IN STRING
  //   const result = puzzleInput.replace(/a|e|i|o|u/g, "-");
  //    $(".generator").hide();
  //    $(".result").text(tokens);
  //   });
  // });

