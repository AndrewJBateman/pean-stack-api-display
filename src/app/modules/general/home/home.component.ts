import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;

  features: any;

  constructor(private meta: Meta, private titleService: Title)
  {
    this.features =
      [
        {
          icon: 'far fa-chart-bar',
          type: 'Charts',
          description: 'API data from API-1',
          image: 'showcase-charts.png',
          link: 'chartjs'
        },
        {
          icon: 'far fa-chart-bar',
          type: 'Components',
          description: 'API data from API-2',
          image: 'showcase-components.png',
          link: 'components'
        },
        {
          icon: 'far fa-chart-bar',
          type: 'Services',
          description: 'API data from API-3',
          image: 'showcase-services-playlist-youtube.png',
          link: 'services'
        },
        {
          icon: 'far fa-chart-bar',
          type: 'HttpClient',
          description: 'API data from API-4',
          image: 'showcase-items.png',
          link: 'items'
        },
        {
          icon: 'far fa-chart-bar',
          type: 'Responsive Images list',
          description: 'API data from API-5',
          image: 'showcase-responsive-images-list.png',
          link: 'films'
        },
      ];
  }

  ngOnInit() {
    this.titleService.setTitle('An Angular website');
    this.meta.addTag({
      name: 'Angular app',
      content: 'andrewbateman.org'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'This is a PWA app'
      });
  }

}
