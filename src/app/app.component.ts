import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
  
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
       this.http.get(this.mylocalFakeURL,{
      //   headers:{
      //     'Authentication':'VasaviReddy',
      //     'role':'author',
      //     'location':'India'
      //   },
      //   params:{
      //     company : "TCS",
      //     role : "fullstackdeveloper"
      //   }
      }).subscribe((response) => {
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
    salary:100000
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
    // ID is important to update the record
  UpdateEmp(inputelement :
     HTMLInputElement){
    let Id = +inputelement.value;
    let url = `http://localhost:3000/Employee/${Id}`; 
    let body = {
     
      name : "vijaya" ,
      salary:2000000,
    };
        this.http.put(url, body).subscribe((response) => {
      console.log(response);
      alert('employee Record Updated Successfully');
      this.fetchData(); // to refresh the table data
    });
  
  }
  PatchStudent(inputelement: HTMLInputElement) {
    let Id = +inputelement.value;
    let url = `http://localhost:3000/Students/${Id}`; // 1
    let body = {
      course: 'Physics',
    };

    this.http.patch(url, body).subscribe((response) => {
      console.log(response);
      alert('Student Record Patched Successfully');
      //this.fetchData(); // to refresh the table data
    });
  }
PatchEmployee(inputelement: HTMLInputElement) {
    let Id = +inputelement.value;
    let url = `http://localhost:3000/Employee/${Id}`; // 1
    let body = {
      salary: 150000,
    };

    this.http.patch(url, body).subscribe((response) => {
      console.log(response);
      alert('Employee Record Patched Successfully');
      //this.fetchData(); // to refresh the table data
    });
  }


  }  

