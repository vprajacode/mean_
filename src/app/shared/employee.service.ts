import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
 export  class EmployeeService {
  //  public selectedEmployee: Employee | undefined;
  // public employees: Employee[] | undefined;
  uri = 'http://localhost:3000/employee';
  constructor(private http:HttpClient) { }
  getempdata():Observable<any[]>
  {
    debugger;
    return this.http.get<any>(this.uri);
  }
}
