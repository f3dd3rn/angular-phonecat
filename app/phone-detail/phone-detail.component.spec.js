describe('phoneDetail', () => {

  beforeEach(module('phoneDetail'));

  describe('controller', () => {
    let $componentController,
        $httpBackend;
    const phoneData = {
      name: 'Xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function(_$componentController_, _$httpBackend_) {
      jasmine.addCustomEqualityTester(angular.equals);

      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/phones/xyz.json')
                  .respond(phoneData);

      $componentController = _$componentController_('phoneDetail', {$routeParams: {phoneId: 'xyz'}});
    }));

    it('creates a `phone` model', function() {
      expect($componentController.phone).toEqual({});
      $httpBackend.flush();
      expect($componentController.phone).toEqual(phoneData);
    });
  });

});
