import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.css']
})
export class DepComponent implements OnInit {
Did:any="";
  constructor(private user:UserDataService) { 
    let data=user.getInfo();
    let Did=data.DeptId;
    console.log(Did);
  }

  ngOnInit(): void {
  }

}
