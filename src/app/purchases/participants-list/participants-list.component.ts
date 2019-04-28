import { Component, OnInit, Input } from '@angular/core';

interface Share {
  purchaser: {
    shortName: string
    name: string
  }
  formattedShareOfPrice: string
  shareOfPrice: number
}

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {

  @Input()
  purchaser: Share;
  @Input()
  participants: Share[]

  constructor() { }

  ngOnInit() {
  }

}
