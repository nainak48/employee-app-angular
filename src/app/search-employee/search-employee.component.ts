import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  empId : number;
  employee : Employee;

  constructor( private employeeService : EmployeeService) { }

  ngOnInit() {
    this.empId = 0;
  }

  searchEmployees() {
    this.employee = new Employee();
    this.employeeService.getEmployee(this.empId)
      .subscribe(employee => this.employee = employee);
  }
 
  onSubmit() {
    this.searchEmployees();
  }

}
