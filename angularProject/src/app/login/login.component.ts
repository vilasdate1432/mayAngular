import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    name:any;
    surname:string = 'patil';
  constructor(private dataService:StorageService) { }

  ngOnInit(): void {
   this.name='jay';
   console.log('login component');
   console.log('login components onInit Method');
   console.log('name',this.name);
   console.log('surname',this.surname);
   console.log('login component',this.dataService.serviceData);
   
   
  }

  getData(newName:any){
    var name = 'poonam';
    this.name = newName;
    console.log('this.name',this.name);
    console.log(name);
    name = newName;
    console.log(name);
    
    
  }
  
  getData2(newName2:any){

    // console.log('this.name', newName2.target.value);

    this.name = newName2
     console.log('this.name',this.name);
   
  }
  onKeypressEvent(eventwwww: any){
    console.log(eventwwww.target.value);
  }

  changeFun(data:any){
    console.log(data.target.value)
  }

  getServiceData(){
    console.log('buttonClick',this.dataService.serviceData);
    this.dataService.data(this.dataService.serviceData);
    this.dataService.setdata(this.dataService.newData = 2000)
    
  }

}
