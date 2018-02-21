describe("Airport", function() {
  var airport;
  var plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
  var weather
  beforeEach(function() {
    airport = new Airport();
  });

  it("has a variable planes which is empty at start", function() {
    expect(airport.planes).toEqual([]);
  })

  describe('.land', function() {
    it('adds the passed plane to the planes array', function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled()
      expect(airport.planes).toContain(plane)
    })
  })

  describe('.takeOff', function() {
    it('removes the passed plane from the planes array', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane)
    })

    it('returns the plane that took off', function() {
      spyOn(airport, '_isStormy').and.returnValue(true)
      airport.land(plane);
      expect(airport.takeOff(plane)).toEqual(plane);
    })

    it('calls takeOff on the plane', function() {
      spyOn(airport, '_isStormy').and.returnValue(true)
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled()
    })

    it('calls .isStormy() on the airport', function() {
      airport.land(plane);
      spyOn(airport, '_isStormy').and.returnValue(true)
      airport.takeOff(plane)
      expect(airport._isStormy).toHaveBeenCalledWith(jasmine.any(Weather))
    })

    it('returns an error when plane takes off from an empty airport', function () {
      spyOn(airport, '_isStormy').and.returnValue(true)
      expect(function() {airport.takeOff(plane)}).toThrow('No planes in airport');
    })
  })

  describe('._isStormy', function() {
    it('raises an error if it is too stormy to fly', function() {
      var weather = jasmine.createSpyObj('weather', ['isStormy'])
      weather.isStormy.and.returnValue(true)
      expect(function(){airport._isStormy(weather)}).toThrow("Too stormy to fly")
    })
  })





})
