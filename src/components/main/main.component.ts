
export const MainComponent = {
    template: '<h1>main {{$ctrl.main}}</h1>',
    controller: class MainComponent {
        $scope: angular.IScope;
        main: string;
        constructor($scope: angular.IScope) {
            'ngInject';
            this.$scope = $scope;
            this.main = 'Hello World!';
        }
    }
};