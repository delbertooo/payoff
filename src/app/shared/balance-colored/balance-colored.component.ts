import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance-colored',
  templateUrl: './balance-colored.component.html',
  styleUrls: ['./balance-colored.component.scss']
})
export class BalanceColoredComponent implements OnInit {

  @Input() balance;

  constructor() { }

  ngOnInit() {
  }

}
