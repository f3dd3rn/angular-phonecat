'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing
//
// TODO: http mocking
// see:  https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend

describe('PhoneCat Application', function() {

  it('should redirect root to `/#!/phones', function() {
    browser.get('');
    expect(browser.getLocationAbsUrl()).toBe('/phones');
  });

  describe('phoneList', function() {

    beforeEach(function() {
      browser.get('/#!/phones');
    });

    it('filters the phone list as a user types into the search box', function() {
      const phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      let query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(8);
    });

    it('is possible to control phone order via the drop-down menu', function() {
      const queryField = element(by.model('$ctrl.query'));
      const orderSelect = element(by.model('$ctrl.orderProp'));
      const nameOption = orderSelect.element(by.css('option[value="name"]'));
      const phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

      function getNames() {
        return phoneNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet'); // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('renders phone specific links', function() {
      const query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('.phones li a')).first().click();
      browser.getCurrentUrl().
        then(function(url) {
          expect(url).toContain('/#!/phones/nexus-s');
        });
    });

  });

  describe('View: Phone detail', function() {
    beforeEach(function() {
      browser.get('index.html#!/phones/nexus-s');
    });

    it('should display the `nexus-s` page', function() {
      expect(element(by.binding('$ctrl.phone.name')).getText()).toBe('Nexus S');
    });
  });

});
