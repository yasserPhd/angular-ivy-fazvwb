import {Component} from '@angular/core';
import {Athlete} from './athlete';
@Component({
  selector:'add-athlete',
  templateUrl:'addAthlete.html',
  styles: [ `input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}` ]
  })
export class AddAthleteComponent{
  athletes:Athlete[]=[];
  constructor(private employeeService:EmployeeService, private router:Router){}
  onSubmit(employee):void{
    this.employeeService.addEmployee(employee as Employee).subscribe(employee=>{
      this.employees.push(employee);
    });
    this.router.navigate(["/employees"]);
  }
}