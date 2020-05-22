import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../../services/github.service';
import { Repo } from 'src/app/models/repo';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  repos: Repo;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.searchRepos("andrewjbateman");
  }
  searchRepos(userName: string) {
    this.githubService.getRepos(userName).subscribe((repos) => {
      this.repos = repos;
      console.log('this repos: ', this.repos);
    })

  }

}
