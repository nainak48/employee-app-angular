import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private baseUrl = 'http://localhost:8080/employees';
 
  constructor(private http: HttpClient) { }
 
  getEmployee(empId: number): Observable<any> {
    //alert(`${this.baseUrl}/${empId}`);
    return this.http.get(`${this.baseUrl}/${empId}`);
  }
 
  createEmployee(employee: any): Observable<any> {
    return this.http.post(this.baseUrl, employee);
  }
 
  updateEmployee(empId: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${empId}`, value);
  }
 
  deleteEmployee(empId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${empId}`);
  }
 
  getEmployeeList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
 
  getEmployeeByName(name: string): Observable<any> {
    //alert(`${this.baseUrl}/${name}`);
    return this.http.get(`${this.baseUrl}/${name}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}