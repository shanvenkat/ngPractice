/* Register angular module with custom name myapp, all other Angular objects will add it to this custom angular module, 
Here Other Anulag objects used are Controller, Service, RouteProvider etc. */

var myapp = angular.module('myapp', ['ngRoute'])

         myapp.config(function ($routeProvider) {
             $routeProvider.
                when('/', {
                    templateUrl: 'app/views/employees.html',
                    controller: 'MyController'
                }).
                when('/employeesearch', {
                    templateUrl: 'app/views/employeesearch.html',
                    controller: 'MyController'
                }).
                when('/employeeupdate/:id', {
                    templateUrl: 'app/views/employeeupdate.html',
                    controller: 'EmployeeDetailsController'
                }).
                otherwise({
                    redirectTo: '/'
                });
            });

            

           