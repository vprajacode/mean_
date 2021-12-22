import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularApp';
  public employee:any[] | undefined;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData()
  {
   
    this.employeeService.getempdata().subscribe(data=>{
      debugger;
      this.employee=data;
      console.log(data);
    });
  }
}
