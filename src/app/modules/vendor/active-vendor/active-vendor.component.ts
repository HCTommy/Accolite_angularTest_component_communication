import { Component, OnInit } from '@angular/core';
import { BlockVendorComponent } from '../block-vendor/block-vendor.component';
import { VendorComponent } from '../vendor.component';


@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  info:any;
  
  constructor() { }

  ngOnInit(): void {
    this.info=VendorComponent.info
  }

  showInBlock(name:any,age:any,city:any):void{
    BlockVendorComponent.Name=name;
    BlockVendorComponent.Age=age;
    BlockVendorComponent.City=city;
    // window.localStorage.setItem("name",name);
    // window.localStorage.setItem("age",age);
    // window.localStorage.setItem("city",city);
  }

}
