var wordReplace = function(input, target, replacement) {
  input = input.split(" ");

  for(var i = 0; i < input.length; i++) {
    if (input[i] === target) {
      input[i] = replacement
    };
  };

  return input.join(" ");

};

$(document).ready(function() {
  $("#wordReplace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var target = $("input#target").val();
    var replacement = $("input#replacement").val();
    var output = wordReplace(sentence, target, replacement);
    $(".result").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
