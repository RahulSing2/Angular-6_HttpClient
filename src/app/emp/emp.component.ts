import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
Id:any="";
Ename:any="";
Esal:any="";
DId:any="";
  constructor(private user:UserDataService) {
   let data= user.getInfo();
this.Id=data.Emailid;
this.Ename=data.EmpName;
this.Esal=data.EmapSal;
this.DId=data.DeptId;
console.log(this.Id);
console.log(this.Ename);
console.log(this.Esal);
console.log(this.DId);
   }

  ngOnInit(): void {
  }

}
