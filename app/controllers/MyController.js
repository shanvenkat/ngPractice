/* Controller Registered under Module named myapp, Here controller calls to scope, Services Javascript object 
to further process and return data stored in scope, Scope is inturn glued to the view*/

// Controller # 1
myapp.controller('MyController', function ($scope, $routeParams, MyService, $filter) {
    // Initialize to load default data to populate the page    

    init();
    function init() {
        $scope.employees = MyService.getemployees();
        $scope.employeecount = MyService.getemployees().length;
    }

    $scope.addemployee = function () {
        var firstName = $scope.newemployee.FirstName;
        var lastName = $scope.newemployee.LastName;
        var age = $scope.newemployee.Age;
        var department = $scope.newemployee.Department;
        var city = $scope.newemployee.City;

        MyService.insertemployee(firstName, lastName, age, department, city);
        $scope.newemployee.FirstName = '';
        $scope.newemployee.LastName = '';
        $scope.newemployee.Age = '';
        $scope.newemployee.Department = '';
        $scope.newemployee.City = '';
    };

    $scope.deleteemployee = function (id) {
        MyService.deleteemployee(id);
    };


    // Customer Filter in Controller as Javascript function
    $scope.$watch("filterValue", function (filterInput) {
        if (filterInput == undefined) {
            $scope.filteredEmployees = MyService.getemployees();
        }
        else {
            var employees = MyService.getemployees();
            $scope.filteredEmployees = $filter("EmployeeFilter")(employees, filterInput);                       
        }
    });

});

 
// Contgroller # 2
myapp.controller('EmployeeDetailsController', function ($scope, $routeParams, MyService) {
     $scope.getemployee = {};   
    init();
    function init() {        
       // get Employeeid from RouteParams and parse to make sure it is Integer.   
        var id = ($routeParams.id) ? parseInt($routeParams.id) : 0;
        if (id > 0) {
            $scope.getemployee = MyService.getemployee(id);
        }
    }

});

// Controller 3 for Navigation stuff
myapp.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
} ]);