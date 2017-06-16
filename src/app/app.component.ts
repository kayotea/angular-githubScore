import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "";
  score: number = 0;
  github = {};
  constructor(private _httpService: HttpService){}
  getGitHub(){
    console.log(this.username);
    this._httpService.retrieve(this.username)
    .then (github => {this.github = github; this.score = github['public_repos']+github['followers'];})
    .catch (err => {console.log(err);})
  }
}