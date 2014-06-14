myapp.filter("EmployeeFilter", function () {

    return function (employees, filterInput) {
        if (!filterInput) return employees;
        var matches = [];       
        filterInput = filterInput.toLowerCase();

        for (var i = 0; i < employees.length; i++) {
            var employee = employees[i];
            if (employee.FirstName.toLowerCase().indexOf(filterInput) > -1) {                
                 matches.push(employee);
            }
        }
        return matches;
    };
});


