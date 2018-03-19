function PhoneDetailController($routeParams, Phone) {
    this.setMainImage = (imageUrl) => {
      this.mainImageUrl = imageUrl;
    };

    this.phone = Phone.get({phoneId: $routeParams.phoneId}, (phone) => {
      this.setMainImage(phone.images[0]);
    });
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', PhoneDetailController]
  });
