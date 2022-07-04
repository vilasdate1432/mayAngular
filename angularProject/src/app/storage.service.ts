import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

   serviceData:any;
   data2:any;
   newData:any;
  constructor() { }
   
  data(data:any){
    console.log('in service');
    return data;
   }

  setdata(data: any) {
    this.data2 = data;
  }
  getdata() {
    return this.data2;
  }


}
