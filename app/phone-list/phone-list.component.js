function PhoneListController($http) {
  $http.get('data/phones.json').then((response) => this.phones = response.data);

  this.orderProp = 'name';
}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', PhoneListController]
  });
