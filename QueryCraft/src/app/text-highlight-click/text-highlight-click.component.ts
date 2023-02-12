import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-highlight-click',
  templateUrl: './text-highlight-click.component.html',
  styleUrls: ['./text-highlight-click.component.css'],
  animations: [
    trigger('hlBox', [
      state('false',
        style({ backgroundColor: 'transparent' })
      ),
      state('true',
        style({ backgroundColor: '{{color}}' }), { params: { color: 'black' } }
      ),
      transition('false => true', [
        animate('1s')
      ])
    ])

  ]
})
export class TextHighlightClickComponent implements OnInit {
  hl = false

  @Input()
  color: string

  @Input()
  hover: string
  constructor() {
    this.color = ''
    this.hover = ''
  }

  ngOnInit (): void {
  }

  onClick () {
    console.log("asdf")
    this.hl = true;
  }

}
