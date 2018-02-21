describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it('.isStormy', function() {
    expect(weather.isStormy).toMatch(/true|false/)
  });
});
