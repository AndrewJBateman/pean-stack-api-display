import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  features: any;

  constructor() {
    this.features = [
      {
        icon: "fas fa-satellite-dish",
        title: "NASA API",
        description: `Astronomy Picture of the Day (APOD) Data is fetched from the <a href="https://api.nasa.gov/index.html#getting-started">official NASA API</a>. The APOD can also be a video and npm module <a href="https://www.npmjs.com/package/safe-pipe">safe-pipe</a> was required to prevent the app from crashing. Data is displayed in a Bootstrap card with a description, date and credit text (where available) below.
      `,
        image: "nasa.png",
        link: "nasa",
      }
    ]
  }

  ngOnInit(): void {
  }

}
