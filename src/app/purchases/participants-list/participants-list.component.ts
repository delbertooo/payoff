import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {

  @Input()
  purchaser: string;
  @Input()
  participants: string[]

  constructor() { }

  ngOnInit() {
  }

  shortenName(name: string) {
    return name
      .replace(/[aeiouäöü]/ig, '')
      .substr(0, 3)
      .toUpperCase();
  }

}
