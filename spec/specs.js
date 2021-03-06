describe("wordReplace", function() {
  it("accepts an input and returns it", function() {
    expect(wordReplace("hello", "", "")).to.equal("hello");
  });
  it("accepts an input, and replaces the target with the replacement.", function () {
    expect(wordReplace("mellow","mellow","yellow")).to.equal("yellow")
  });
  it("supports mutiple word inputs.", function() {
    expect(wordReplace("doot doot loot loot", "doot", "mute")).to.equal("mute mute loot loot");
  });
});
