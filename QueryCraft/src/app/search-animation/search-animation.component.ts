import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-animation',
  templateUrl: './search-animation.component.html',
  styleUrls: ['./search-animation.component.css']
})
export class SearchAnimationComponent implements OnInit {

  @Input()
  skipTypieType: boolean

  constructor() {
    this.skipTypieType = false
  }

  ngOnInit (): void {
  }

}
