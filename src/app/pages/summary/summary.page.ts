import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  sleepTimeToday: number = 6;

  constructor() { }

  ngOnInit() {
  }

}
