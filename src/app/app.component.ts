import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'angularhttp';
  mylocalFakeURL = "http://localhost:3000/Employee";
  data: any= [];
  GetID="http://localhost:3000/Employee/1"
  constructor(private http: HttpClient) { }    //httpclient is built in service to communicate with API

  // fakeAPIURL="https://jsonplaceholder.typicode.com/todos";
  //creating custom fake api url and set to install own server Json server.like get,patch-partial update,post,delete.
  //using servers we can create apis
  ngOnInit(): void {
    // this.http.get(this.fakeAPIURL).subscribe((response)=>{
    //   console.log(response);
    //   this.data =response;
    // });  //http is local variable
    this.fetchData();
  }
  EmpData=false;
  //all details data
  fetchData(){
      this.http.get(this.mylocalFakeURL).subscribe((response) => {
        // console.log(response);
        this.data = response;
        this.EmpData=true;
    


      });
    }
    //getting details of specific id details
    fetchDataByID(element: HTMLInputElement){
      let id=+element.value;
     let  GetID=`http://localhost:3000/Employee/${id}`;
      this.http.get(GetID).subscribe((response)=>{

        let Employee=[];
        Employee.push(response);
        this.data=Employee;  //data display in object format but the data available loop format
        this.EmpData=true;

      })
      //console.log(value);

    }
  inserestEmp(){
    let newEmp={
    id:7,
    name:"Manvitha Reddy",
    salary:1000000
    }
    let addURL=`http://localhost:3000/Employee`;
    this.http.post(addURL,newEmp).subscribe((response)=>{
      console.log(response);
      alert("add successfully");
      this.fetchData();
    })
    
  }
deleteEmp(inputelement:HTMLInputElement){
  let ID=+inputelement.value;
  this.http
  .delete(`http://localhost:3000/Employee/${ID}`)
  .subscribe((response)=>{
    console.log(response);
    alert("delete successfully");
    this.fetchData();
  })
}
}
