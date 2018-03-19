describe('Phone', function() {

  beforeEach(module('core.phone'));
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  describe('service', function() {
    const phonesData = [{name: 'Test Phone A'}, {name: 'Test Phone B'}];
    let Phone;

    // Add a custom equality tester before each test
    beforeEach(inject(function(_$httpBackend_, _Phone_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/phones/phones.json')
        .respond(phonesData);

      Phone = _Phone_;
    }));

    // Instantiate the service and "train" `$httpBackend` before each test
    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the phones data from `/data/phones.json`', function() {
      const phones = Phone.query();

      expect(phones).toEqual([]);

      $httpBackend.flush();
      expect(phones).toEqual(phonesData);
    });
  });

});
