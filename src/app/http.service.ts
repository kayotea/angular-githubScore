import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  constructor(private _http: Http) { }
  retrieve(username){
    console.log('entered retrieve');
    username = 'https://api.github.com/users/'+username;
    console.log(username);
    return this._http.get(username).map(data=>data.json()).toPromise();
  }
}
