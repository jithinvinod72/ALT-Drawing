import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  BookMark(){
    alert("Can't Perform the action."  + "\n" +
    "Please press Ctl + D to bookmark this page");
    // bookmarks.create({
    //   title: "bookmarks.create() on MDN",
    //   url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create"
    // });
  }
  navigteToGithub(){
    window.location.assign("https://github.com/jithinvinod72");
  }

}
