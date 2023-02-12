import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['./text-highlight.component.css']
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
}
