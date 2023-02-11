import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['./text-highlight.component.css'],
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
export class TextHighlightComponent implements OnInit {
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

  @HostListener('document:click', ['$event'])
  keyEvent (event: any) {
    this.hl = true;
  }
}
