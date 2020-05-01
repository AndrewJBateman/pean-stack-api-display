import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pean-stack-api-display';
  version = 'Angular version 9.0.5';

  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Integration, contact, about, API' },
      { name: 'robots', content: 'index' },
      { name: 'author', content: 'Andrew Bateman' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-04-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

}
