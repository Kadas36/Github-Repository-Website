
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  token: any = environment.token;

  getData(username) {
    return this.http.get(`https://api.github.com/users/${username}?access_token=${this.token}`);
  }

  getRepos(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

}
