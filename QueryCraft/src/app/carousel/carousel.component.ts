import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  currentSlide = 0;
  slides = 4;

  constructor() {
  }

  ngOnInit (): void {
  }

  onPreviousClick () {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides - 1 : previous;
    console.log("Previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick () {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides ? 0 : next;
    console.log("Next clicked, new current slide is: ", this.currentSlide)
  }
}
