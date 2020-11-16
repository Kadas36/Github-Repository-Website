import { User } from './../user';
import { Repository } from './../repository';
import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
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

// this.fetchedRepo?.name,
//     this.fetchedRepo?.description,
//     this.fetchedRepo?.git_url,
