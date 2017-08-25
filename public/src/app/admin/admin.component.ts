import { Router } from '@angular/router';
import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = {
    login: "",
    pass: ""
  }
  error = "";

  constructor(private _db: DatabaseService, private router: Router) {

  }

  ngOnInit() {

  }

  userLogin() {
    if (this.user.login !== "" && this.user.pass !== "") {
      this._db.login(this.user)
        .then(status => {
          if (status.loggedIn) {
            this.router.navigate(['/aed']);
          } else {
            this.error = "Login failed."
          }
        })
        .catch(err => { console.log(err); })
    }

  }

}
