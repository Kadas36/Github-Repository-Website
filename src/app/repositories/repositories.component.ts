import { Repository } from './../repository';
import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnChanges {
  @Input() username: string;

  repos: any = [];

  constructor(
    private service: GithubServiceService,
  ) { }

  ngOnChanges(): void {
    this.fetchRepos();
  }

  fetchRepos(): any {
    this.service.getRepos(this.username).subscribe(
      data => {
        this.repos = data;
        console.log(data);
      }
    );
  }

}

// this.fetchedRepo?.name,
//     this.fetchedRepo?.description,
//     this.fetchedRepo?.git_url,
