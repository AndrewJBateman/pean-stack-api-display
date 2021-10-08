import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  features: any;

  constructor() {
    this.features = [
      {
        expanded: true,
        icon: "fas fa-satellite-dish",
        title: "NASA API",
        state: "show",
        description: `Astronomy Picture of the Day (APOD) Data is fetched from the
        <a href="https://api.nasa.gov/index.html#getting-started" target="_blank" rel="noreferrer noopener">official NASA API</a>.
        The APOD can also be a video and npm module
        <a href="https://www.npmjs.com/package/safe-pipe" target="_blank" rel="noreferrer noopener">safe-pipe</a>
        was required to prevent the app from crashing.
        Data is displayed in a Bootstrap card with a description, date and credit text (where available) below.`,
      },
      {
        expanded: false,
        icon: "fab fa-btc",
        title: "Crypto API",
        state: "hide",
        description: `Price data for a range of cryptocurrencies is fetched from the
        <a href="https://min-api.cryptocompare.com/">CryptoCompare API</a> and
        is displayed using a Bootstrap responsive table. The table also shows
        svg icons for each currency, retrieved from the assets folder. The
        cryptocurrency prices are displayed in euro but this can be changed to
        other currencies.`,
      },
      {
        expanded: false,
        icon: "fas fa-map-marker",
        title: "Maps API",
        state: "hide",
        description: `User location data is fetched from
        <a href="https://ipapi.co"
          >ipapi, a real-time Geolocation & Reverse IP Lookup REST API</a
        >. If location data is not available then the coordinates of the
        Eiffel Tower are used to center the map. Map data is obtained using
        <a href="https://ipapi.com/">Leaflet</a>, an open-source JavaScript
        library for mobile-friendly interactive maps that requires no API key.`,
      },
      {
        expanded: false,
        icon: "far fa-newspaper",
        title: "News API",
        state: "hide",
        description: `News data is obtained from the
        <a
          href="https://developer.nytimes.com/docs/top-stories-product/1/overview"
          >New York Times Top Stories HTTP REST API.</a
        > Each Bootstrap News card shows an image with title and content.
        There is a footer that shows the date of the article as '..ago' via a
        custom 'date-convert' pipe based on the Day.js minimalist JavaScript
        library. There is also a hyper-link to the original NYT article.`,
      },
      {
        expanded: false,
        icon: "fas fa-chart-bar",
        title: "Charts API",
        state: "hide",
        description: `Bootstrap accordian-style collapsible cards are used to display data
        from the
        <a href="https://developers.google.com/books/docs/overview"
          >Google Charts API</a
        >
        in a range of formats, including line, pie, gauge (3 gauges shown),
        table and bar-chart. All charts have their own components. Only one
        card is displayed at a time - clicking on one will collapse the other
        one.`,
      },
      {
        expanded: false,
        icon: "fas fa-book-open",
        title: "Books API",
        state: "hide",
        description: `Data on books is fetched from the
        <a href="https://developers.google.com/books/docs/overview"
          >Google Books API.</a
        >
        Book data is displayed in a grid of Bootstrap cards. Clicking on a
        card will activate ruote the user to a page with more details about
        the book.`,
      },
      {
        expanded: false,
        icon: "fas fa-book-reader",
        title: "Bestsellers API",
        state: "hide",
        description: `Data on bestsellers is fetched from the
        <a href="https://developer.nytimes.com/docs/books-product/1/overview"
          >New York Times API.</a
        >
        Bestseller data is displayed in a grid of Bootstrap cards. Clicking on
        a card will route the user to a page with more details about the book.`,
      },
      {
        expanded: false,
        icon: "fab fa-github",
        title: "Github API",
        state: "hide",
        description: `User and repository data is fetched from the
        <a href="https://developer.github.com/v3/">Github REST API v3. </a
        >Github card shows Github repo details from user search. Repo button
        redirects to repo list page.`,
      }
    ];
  }

  ngOnInit(): void {}
}
