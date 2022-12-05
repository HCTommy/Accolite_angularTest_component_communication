import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  static info:any=[
    {
      "name": "vend1",
      "age": 40,
      "city": "city1",
    },
    {
    "name": "vend2",
    "age": 41,
    "city": "city2",
    },
    {
      "name": "vend3",
      "age": 43,
      "city": "city3",
    },
    {
      "name": "vend4",
      "age": 39,
      "city": "city4",
    },
    {
      "name": "vend5",
      "age": 37,
      "city": "city5",
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
