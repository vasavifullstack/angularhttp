import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
fetchDataByID() {
throw new Error('Method not implemented.');
}
  
  title = 'angularhttp';
  mylocalFakeURL = "http://localhost:3000/Employee";
  data: any= [];
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
  fetchData(){
      this.http.get(this.mylocalFakeURL).subscribe((response) => {
        // console.log(response);
        this.data = response;
        this.EmpData=true;
    


      });
    }
    fetchDataByID(element: HTMLInputElement){
      let value=+element.value;
      console.log(value);

    }
  
  }

