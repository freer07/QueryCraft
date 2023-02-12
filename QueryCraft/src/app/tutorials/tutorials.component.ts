import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  // content for the tutorial, in the order we want to display it 
  // this only works for a specific form of query -- which ... sucks but it does give us two different queries? 
  public slides = [ 
    {intro_text: "How do I ", 
     vocab_text: "get to", 
     keyword_text: "Toronto airport",
     exit_text: "?"}, 
     {intro_text: "How do I find ", 
     vocab_text: "someone to fix my car ", 
     keyword_text: "nearby",
     exit_text: "?"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
