import { FlashCode } from './../flashcode';
import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-edit-delete',
  templateUrl: './admin-edit-delete.component.html',
  styleUrls: ['./admin-edit-delete.component.css']
})
export class AdminEditDeleteComponent implements OnInit {

  allFlashCodes = [];
  flashcode = new FlashCode;

  constructor(private _db: DatabaseService) {
    this._db.allFlashCodes()
      .then(allFlashCodes => {
        if (allFlashCodes) {
          this.allFlashCodes = allFlashCodes;
        }
      })
      .catch(err => { console.log(err); })
  }

  ngOnInit() {
  }

  addQSubmit() {
    // add a FlashCode
    this._db.addFlashCode(this.flashcode)
      .then(flashcodes => {
        if (flashcodes) {
          // if success - get new list of flashcodes
          this._db.allFlashCodes()
            .then(allFlashCodes => {
              if (allFlashCodes) {
                this.allFlashCodes = allFlashCodes;
              }
            })
            .catch(err => { console.log(err); })
        }
      })
      .catch(err => { console.log(err); })
  }

}
