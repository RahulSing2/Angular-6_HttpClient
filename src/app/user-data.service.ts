import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http:HttpClient) { }
  showInfo(){
    let url1="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url1);
  }   
  getInfo(){
return{
  Emailid:111,
  EmpName:"Rahul kataria",
  EmapSal:5000,
  DeptId:101,
}

  }
}
