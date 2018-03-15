describe('PhoneListController', function() {
  let $componentController;

  beforeEach(module('phonecatApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_('phoneList');
  }));

  it('should create a `phones` model with 3 phones', function() {
    expect($componentController.phones.length).toBe(3);
  });

});
