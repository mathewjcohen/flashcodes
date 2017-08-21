import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  aboutVisible = false;
  lang = 'js';

  switchLang(lang){
    this.lang = lang;
  }

}
