import {Component} from '@angular/core';
import {Athlete} from './athlete';
import {AthleteService} from './AthleteService';
import { Router} from '@angular/router';
@Component({
  selector:'add-athlete',
  templateUrl:'addAthlete.html',
  styles: [ `input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}` ]
  })
export class AddAthleteComponent{
  athletes:Athlete[]=[];
  constructor(private athleteService:AthleteService, private router:Router){}
  onSubmit(athlete):void{
    this.athleteService.addEmployee(athlete as Athlete).subscribe(athlete=>{
      this.athletes.push(athlete);
    });
    this.router.navigate(["/athletes"]);
  }
}