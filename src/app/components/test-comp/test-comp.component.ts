import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  res='';
  population=''
  year=''
  res$!:Observable<any>
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getIpAdress();
  }


  getIpAdress(){
    // this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").subscribe((res:any)=>{
      // this.ipAdress=res.ip;
      // console.log(res);
      // this.res=res.data;
      this.res$=this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");

  }

}
