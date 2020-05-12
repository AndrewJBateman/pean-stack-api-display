import { Component, OnInit } from "@angular/core";

import { NewsService } from "../../../services/news.service";
import { LocationService } from "../../../services/location.service";
import { Article } from "../../../models/news";

// array of countries served by the news API service - note it does not include Spain
const countryCodeArray = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  countryCode: string;
  checkedCountryCode: string;
  mArticles: Array<any>;
  mSources: Array<any>;
  data: any;
  status = "";
  sources = [];
  onlySources = [];
  selectedSource = "CNN";
  defaultCountry = "us";
  sourceChosen = false;
  selectedLanguage: "string";

  constructor(
    private locationService: LocationService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    console.log('ngOninit started');
    this.locationService.getLocation().subscribe((data) => {
      console.log("country code search: ", data);
      const countryData = data;
      this.countryCode = countryData.country.toLowerCase();
      const checkedCountryCode =
        countryCodeArray.indexOf(this.countryCode.toLowerCase()) === -1
          ? this.defaultCountry
          : countryData.country.toLowerCase();
      console.log("Country code is: ", checkedCountryCode);
      this.getCountryNews(checkedCountryCode);
    });

    // get list of news sources via news API service
    this.newsService.getSources("/sources?").subscribe(
      (data) => {
        this.status = data.status;
        this.sources = data.sources;

        // this.newsStorageService.storeData('newsSources', JSON.stringify(this.sources));
        console.log(
          'ngOnInit getSources function ran with status "',
          this.status,
          '" and retrieved an array of',
          +this.sources.length,
          "sources."
        );
      },
      (err) => {
        console.log("an error occured: ", err);
      }
    );
  }

  getCountryNews(countryCode: string) {
    this.newsService
      .getNews("top-headlines?country=" + countryCode)
      .subscribe((data) => {
        this.mArticles = data["articles"];
        console.log('articles: ', this.mArticles);
      });
  }
}
