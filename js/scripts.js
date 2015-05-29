var wordReplace = function(input, target, replacement) {
  input = input.split(" ");

  for(var i = 0; i < input.length; i++) {
    if (input[i] === target) {
      input[i] = replacement
    };
  };

  return input.join(" ");


};
