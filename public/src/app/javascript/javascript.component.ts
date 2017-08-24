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
        this.jsFlashCodes = jsFlashCodes;
        var rand = Math.floor(Math.random() * this.jsFlashCodes.length);
        this.currentFlashCode = this.jsFlashCodes[rand];
        this.jsFlashCodes.splice(rand, 1);
      }
    })
    .catch(err => { console.log(err); })
  }

  ngOnInit() {
    
  }

  nextFC() {
    if (this.jsFlashCodes.length < 2) {
      this.currentFlashCode = this.jsFlashCodes[0];
      this.jsFlashCodes = [];
      this._db.getJS()
        .then(jsFlashCodes => {
          if (jsFlashCodes) {
            this.jsFlashCodes = jsFlashCodes;
          }
        })
        .catch(err => { console.log(err); })
    }else{
      var rand = Math.floor(Math.random() * this.jsFlashCodes.length);
      this.currentFlashCode = this.jsFlashCodes[rand];
      this.jsFlashCodes.splice(rand, 1);
    }
  }

}
