import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    name:any;
    surname:string = 'patil';
  constructor() { }

  ngOnInit(): void {
   this.name='jay';
   console.log('login component');
   console.log('login components onInit Method');
   console.log('name',this.name);
   console.log('surname',this.surname);
   
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
    this.name = newName2;
    console.log('this.name',this.name);
   
  }



}
