import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class DatabaseService {

  constructor(private _http: Http) { }

  checkLogin(){
    console.log("inside service")
    return this._http.get('/checkLogin').map(data => data.json()).toPromise();
  }
  login(user){
    return this._http.post('/login', user).map(data => data.json()).toPromise();
  }
  logout(){
    return this._http.get('/logout').map(data => data.json()).toPromise();
  }
  getJS(){
    return this._http.get('/getJS').map(data => data.json()).toPromise();
  }
  getTS(){
    return this._http.get('/getTS').map(data => data.json()).toPromise();
  }
  allFlashCodes(){
    return this._http.get('/allFlashCodes').map(data => data.json()).toPromise();
  }
  deleteFlashCode(q){
    return this._http.post('/deleteFlashCode', q).map(data => data.json()).toPromise();
  }
  addFlashCode(flashcode){
    return this._http.post('/addFlashCode', flashcode).map(data => data.json()).toPromise();
  }

}
