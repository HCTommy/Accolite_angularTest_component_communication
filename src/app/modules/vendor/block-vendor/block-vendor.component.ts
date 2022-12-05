import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
  static Name:any;
  static Age:any;
  static City:any;

  constructor() { }

  ngOnInit(): void {

  }

  getName():string{

    return BlockVendorComponent.Name;

  }

  getAge():string{
    return BlockVendorComponent.Age;
  }

  getCity():string{
    return BlockVendorComponent.City;
  }

}
