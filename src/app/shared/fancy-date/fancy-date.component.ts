import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-date',
  templateUrl: './fancy-date.component.html',
  styleUrls: ['./fancy-date.component.scss']
})
export class FancyDateComponent implements OnInit {

  @Input()
  date: string;

  constructor() { }

  ngOnInit() {
  }

}
