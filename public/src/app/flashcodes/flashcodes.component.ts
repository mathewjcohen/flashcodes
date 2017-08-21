import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcodes',
  templateUrl: './flashcodes.component.html',
  styleUrls: ['./flashcodes.component.css']
})
export class FlashcodesComponent implements OnInit {
  aboutVisible = false;
  lang = 'js';

  constructor() { }

  ngOnInit() {
  }

  switchLang(lang){
    this.lang = lang;
  }

}
