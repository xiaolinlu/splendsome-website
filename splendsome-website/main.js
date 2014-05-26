if (Meteor.isClient) {

  require('splendsome');

  angular.module('ngFameApp', ['famous.angular'])

  .controller('appController', appController);

  ngMeteor.requires.push('ngFameApp');

}
