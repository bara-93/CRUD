var employeeNameInput = document.getElementById("employeeName");
var employeeAgeInput = document.getElementById("employeeAge");
var employeeDepartmentInput = document.getElementById("employeeDepartment");
var employeeSalaryInput = document.getElementById("employeeSalary");
var addBtn = document.getElementById("click");
var data = document.getElementById("data");
var Employees = [];
addBtn.onclick = function(){
    addEmployee();
    displayData();
}
function addEmployee(){
    var employee = {
        name: employeeNameInput.value ,
        age: employeeAgeInput.value ,
        department: employeeDepartmentInput.value ,
        salary: employeeSalaryInput.value
    };
    Employees.push(employee);
}
function displayData(){
    var employeesDatas = "";
    for( var i=0; i<Employees.length; i++){
        employeesDatas += "<tr><th>" +i+"</th><th>" +Employees[i].name + "</th><th> "+ Employees[i].age + "</th><th> " + Employees[i].department +"</th><th>" + Employees[i].salary +"</th><th>update</th><th>delete</th></tr>"
    }
    data.innerHTML = employeesDatas;
}
