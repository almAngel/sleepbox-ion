import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  selectedSegment: string;

  constructor() { }

  ngOnInit() {
  }

  selectSegment(name) {
    this.selectedSegment = name;
  }
}
