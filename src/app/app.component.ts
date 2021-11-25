import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';
import {mapTo} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient) { }
  httpdata:any;
  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/users")
    // .pipe(mapTo((Response:any) => Response.json()))
    // .subscribe((data:any) => this.displaydata(data));  
    this.http.get("http://jsonplaceholder.typicode.com/users")
      .subscribe((data) => this.displaydata(data));    
 }
 displaydata(data:any)
  {this.httpdata = data}


  DeptId:any="";
 
  onSubmit(data:any){
console.log(data);
  }
   title = 'AngularDemoApp';
  // constructor(private user:UserDataService){
  //    let data=user.getInfo();
  //   this.DeptId=data.DeptId;
  //   this.user.showInfo().subscribe(data=>
  //   console.log(data))

  }
  
