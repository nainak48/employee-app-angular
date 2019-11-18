import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.reloadData();
  }
 
  deleteAllEmployees() {
    this.employeeService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }
}