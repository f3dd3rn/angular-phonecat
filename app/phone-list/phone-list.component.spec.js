describe('phoneList', function() {

  beforeEach(module('phoneList'));

  describe('controller', () => {
    let $componentController,
        $httpBackend;

    beforeEach(inject(function(_$componentController_, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/phones.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      $componentController = _$componentController_('phoneList');

      $httpBackend.flush();
    }));

    it('creates a `phones` model with 2 phones', function() {
      expect($componentController.phones.length).toBe(2);
    });

    it('sets the default value for the `orderProp` model to name', function() {
      expect($componentController.orderProp).toBe('name');
    });
  });

});
