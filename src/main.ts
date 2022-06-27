import angular from 'angular';
import uiRouter, { StateProvider } from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import MainComponent from './components';

export const AboutComponent = {
  template: '<h1>about {{$ctrl.about}}</h1>',
  controller: class AboutComponent {
    $scope: angular.IScope;
    about: string;
    constructor($scope: angular.IScope) {
      'ngInject';
      this.$scope = $scope;
      this.about = 'Hello World!';
    }
  }
};

angular.module('app', [ngResource, uiRouter])
  .config(['$locationProvider', '$stateProvider', function ($locationProvider: any, $stateProvider: StateProvider) {
    $locationProvider.hashPrefix('');
    $stateProvider
      .state('main', {
        url: '/main',
        component: 'main'
      })
      .state('about', {
        url: '/about',
        component: 'about'
      });
  }])
  .component('main', MainComponent)
  .component('about', AboutComponent);