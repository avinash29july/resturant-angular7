import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import {Papa } from 'ngx-papaparse';
@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit {
  faStar = faStar;
  page = 1;
  resturantListData = [];
  datalength = 0;
  resturantList = [];

  constructor(private papa: Papa) { }

  ngOnInit() {
    const csvData = 'http://localhost:4200/assets/euro_restrobeee02c.csv';
    // const csvData = 'http://hck.re/RQfq5X';
    this.papa.parse(csvData, {
      download: true,
      header: true,
      complete: (row) => {
        this.resturantListData = row.data;
        console.log('Row:', this.resturantListData);
        this.datalength = this.resturantListData.length;
        this.resturantList = _.map(this.resturantListData);
      }
    });
  }
}
