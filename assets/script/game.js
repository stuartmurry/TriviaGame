$(document).ready(function() {
  function TriviaGame() {
    return {
      
    };
  }

  $("#restart").on("click", function(evt) {
    TriviaGame().start();
  });

  TriviaGame().start();
});
