import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
   console.log('testCompoData', this.dataService.storageData);
   console.log(this.dataService.dataServiceFunction());


  }

}
