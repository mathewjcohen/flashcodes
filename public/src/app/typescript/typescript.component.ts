import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  tsFlashCodes = [];
  currentFlashCode = {};

  constructor(private _db: DatabaseService) {
    this._db.getTS()
    .then(tsFlashCodes => {
      if (tsFlashCodes) {
        this.tsFlashCodes = tsFlashCodes;
        var rand = Math.floor(Math.random() * this.tsFlashCodes.length);
        this.currentFlashCode = this.tsFlashCodes[rand];
        this.tsFlashCodes.splice(rand, 1);
      }
    })
    .catch(err => { console.log(err); })
  }

  ngOnInit() {
    
  }

  nextFC() {
    if (this.tsFlashCodes.length < 2) {
      this.currentFlashCode = this.tsFlashCodes[0];
      this.tsFlashCodes = [];
      this._db.getTS()
        .then(tsFlashCodes => {
          if (tsFlashCodes) {
            this.tsFlashCodes = tsFlashCodes;
          }
        })
        .catch(err => { console.log(err); })
    }else{
      var rand = Math.floor(Math.random() * this.tsFlashCodes.length);
      this.currentFlashCode = this.tsFlashCodes[rand];
      this.tsFlashCodes.splice(rand, 1);
    }
  }

}
