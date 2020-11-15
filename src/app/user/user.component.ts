import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = 'kadas36';
  user = new User('kadas36', 0, '');

  constructor(
    private service: GithubServiceService,
  ) { }

  fetchedUser: any;

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchRepos();
  }

  fetchUsers(): any {
    this.service.getData(this.user.name).subscribe(
      data => {
        this.fetchedUser = data;
        console.log(data);
      }
    );
  }

  fetchRepos() {
    this.service.getRepos(this.user.name).subscribe(
      data => {
        console.log(data);
      }
    );
  }


}
