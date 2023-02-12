import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  // content for the tutorial, in the order we want to display it 
  public slides = [ 
    {intro_text: "some text to introduce a thing", 
     another_attr: "some more text or something"}, 
     {intro_text: "some text to introduce a different thing than before", 
     another_attr: "this is something else, but it is also text"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
