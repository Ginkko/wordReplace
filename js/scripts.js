var wordReplace = function(input, target, replacement) {
  var finalOutput = ""
  input = input.split(" ");

  for(var i = 0; i < input.length; i++) {
    if (input[i] === target) {
      input[i] = replacement
    };
  };


  finalOutput = input.join();
  return finalOutput

};
