function PhoneDetailController($http, $routeParams) {
  $http.get(`data/phones/${$routeParams.phoneId}.json`).
    then((response) => {
      this.phone = response.data
    });
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams', PhoneDetailController]
  });
