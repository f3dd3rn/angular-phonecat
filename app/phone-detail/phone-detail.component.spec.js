describe('phoneDetail', () => {

  beforeEach(module('phoneDetail'));

  describe('controller', () => {
    let $componentController,
        $httpBackend;

    beforeEach(inject(function(_$componentController_, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/phones/xyz.json')
                  .respond({name: 'Xyz'});

      $componentController = _$componentController_('phoneDetail', {$routeParams: {phoneId: 'xyz'}});
    }));

    it('creates a `phone` model', function() {
      expect($componentController.phone).toBeUndefined();
      $httpBackend.flush();
      expect($componentController.phone.name).toEqual('Xyz');
    });
  });

});
