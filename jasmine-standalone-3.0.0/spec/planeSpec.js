describe("Plane", function() {
  var plane;
  beforeEach(function() {
    plane = new Plane();
  })

  it("has a landed which is set to false", function() {
    expect(plane.landed).toEqual(false);
  })

  describe(".land", function() {
    it('lands the plane', function() {
      plane.land();
      expect(plane.landed).toEqual(true)
    })
  })

  describe(".takeOff", function() {
    it('the plane takes off', function() {
      plane.land();
      plane.takeOff();
      expect(plane.landed).toEqual(false)
    })
  })


})
