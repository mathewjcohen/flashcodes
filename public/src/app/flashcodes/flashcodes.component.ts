import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-flashcodes',
  templateUrl: './flashcodes.component.html',
  styleUrls: ['./flashcodes.component.css'],
  animations: [
    trigger(
      'aboutWrapper', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger(
      'aboutAnim', [
      transition(':enter', [
        style({transform: 'translateY(-300px)', opacity: 0}),
        animate('600ms ease-in', style({transform: 'translateY(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('100ms ease-in', style({transform: 'translateY(-300px)', opacity: 0}))
      ])
    ])
  ]
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
