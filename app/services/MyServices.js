/* Services Registered under Module named myapp, List of Javascript functions or  
Busines Logic can be written to call from Controller */

myapp.service('MyService', function () {

    this.insertemployee = function (firstName, lastName, age, department, city) {
        var topID = employees.length + 1;
        employees.push({
            id: topID,
            FirstName: firstName,
            LastName: lastName,
            Age: age,
            Department: department,
            City: city
        });
    };

    this.getemployees = function () {
        return employees;
    };


    this.deleteemployee = function (id) {
        for (var i = employees.length - 1; i >= 0; i--) {
            if (employees[i].id === id) {
                employees.splice(i, 1);
                break;
            }
        }
    };


    this.getemployee = function (id) {
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                return employees[i];
            }
        }
        return null;
    };

    var employees = [
    { id: 1, FirstName: 'venkatesan', LastName: 'Shanmugam', Age: '40', Department: 'Marketing', Address: '3434 main street', City: 'New York' },
    { id: 2, FirstName: 'Akbar', LastName: 'Ali', Age: '22', Department: 'Sales', Address: '78787 broad street', City: 'Chicago' },
    { id: 3, FirstName: 'Ying', LastName: 'Liu', Age: '35', Department: 'HR', Address: '65656 Short circle street', City: 'Paris' },
    { id: 4, FirstName: 'Adam', LastName: 'Smith', Age: '40', Department: 'Payments', Address: '2323 7 th street', City: 'London' },
    { id: 5, FirstName: 'James', LastName: 'Peake', Age: '50', Department: 'Accounts', Address: '2323 Hwy 4 th street', City: 'Seattle' },
    { id: 6, FirstName: 'Ram', LastName: 'Gopal', Age: '30', Department: 'Legal', Address: '54654 Route 50,6 th street', City: 'Mumbai' },
    { id: 7, FirstName: 'Vijay', LastName: 'Kundra', Age: '30', Department: 'Finance', Address: '87979 one  street', City: 'Tokyo' },
    { id: 8, FirstName: 'Uma', LastName: 'Shetty', Age: '50', Department: 'IT', Address: '90239 Roland street', City: 'Toronto' },
    { id: 9, FirstName: 'Madhu', LastName: 'Pillai', Age: '44', Department: 'HR', Address: '23323 mall st', City: 'Italy' },
    { id: 10, FirstName: 'Vivek', LastName: 'Desai', Age: '30', Department: 'Consulting', Address: '78678 pump st', City: 'Sydney' }

    ];



});