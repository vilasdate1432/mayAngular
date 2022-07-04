import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
     data:any;
  constructor(private serviceStorage:StorageService) { }

  ngOnInit(): void {
    console.log('before defining',this.serviceStorage.serviceData);
    this.data = this.serviceStorage.serviceData
    this.serviceStorage.serviceData = 100;
    console.log('after defining',this.serviceStorage.serviceData);
    this.serviceStorage.serviceData = 'om';
    console.log('after reassigning',this.serviceStorage.serviceData);


  }
  getData(){
   let value = this.serviceStorage.getdata();
    console.log('value', value);
    
  }

}
