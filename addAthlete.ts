import {Component} from '@angular/core';
import {Athlete} from './athlete';
import {Router} from '@angular/router';
@Component({
  selector:'add-employee',
  templateUrl:'add-employee.component.html',
  styles: [ `input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}` ]
  })
export class AddEmployeeComponent{
  employees:Employee[]=[];
  constructor(private employeeService:EmployeeService, private router:Router){}
  onSubmit(employee):void{
    this.employeeService.addEmployee(employee as Employee).subscribe(employee=>{
      this.employees.push(employee);
    });
    this.router.navigate(["/employees"]);
  }
}