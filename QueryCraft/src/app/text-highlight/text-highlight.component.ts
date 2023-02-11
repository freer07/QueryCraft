import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
        style({ backgroundColor: 'orange' })
      ),
      transition('false => true', [
        animate('1s')
      ])
    ])

  ]
})
export class TextHighlightComponent implements OnInit {
  hl = false

  constructor() { }

  ngOnInit (): void {

  }

  @HostListener('document:keypress', ['$event'])
  keyEvent (event: any) {
    console.log("here!!");
    if (event.keyCode == 13) {//enter
      this.hl = true;
    }
  }

}
