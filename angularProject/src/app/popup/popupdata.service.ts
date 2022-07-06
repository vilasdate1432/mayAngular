import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupdataService {
 colors:any = ['pink','red','blue','black','white'];
 data = 10000;
 names = {
  "FN":'pooja','LN':"Patil"
 }

  constructor() { }
getD()
{
  return this.data
}
}
