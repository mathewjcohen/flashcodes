import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class DatabaseService {

  constructor(private _http: Http) { }

  getJS(){
    return this._http.get('/getJS').map(data => data.json()).toPromise();
  }

}
