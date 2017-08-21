import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  jsFlashCodes = [];
  currentFlashCode = {};

  constructor(private _db: DatabaseService) {
    this._db.getJS()
      .then(jsFlashCodes => {
        if (jsFlashCodes) {
          let rand = Math.floor(Math.random() * jsFlashCodes.length) + 1;
          this.jsFlashCodes = jsFlashCodes;
          this.currentFlashCode = this.jsFlashCodes[rand];
          this.jsFlashCodes.splice(rand, 1);
        }
      })
      .catch(err => { console.log(err); })
  }

  ngOnInit() {

  }

  nextFC() {
    if (this.jsFlashCodes.length == 1) {
      this.jsFlashCodes = [];
      this.currentFlashCode = {};
      this._db.getJS()
        .then(jsFlashCodes => {
          if (jsFlashCodes) {
            let rand = Math.floor(Math.random() * jsFlashCodes.length) + 1;
            this.jsFlashCodes = jsFlashCodes;
            this.currentFlashCode = this.jsFlashCodes[rand];
            this.jsFlashCodes.splice(rand, 1);
          }
        })
        .catch(err => { console.log(err); })
    }else{
      let rand = Math.floor(Math.random() * this.jsFlashCodes.length) + 1;
      this.currentFlashCode = this.jsFlashCodes[rand];
      this.jsFlashCodes.splice(rand, 1);
    }
  }

}
