import { Component, OnInit } from '@angular/core';
//import { Employee } from '../shared/employee.model';

import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
  public employee:any[] | undefined;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData()
  {
    this.employeeService.getempdata().subscribe(data=>{
      this.employee=data;
      console.log(data);
    });
  }

}
