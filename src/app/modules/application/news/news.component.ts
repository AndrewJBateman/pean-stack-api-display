import { Component, OnInit } from "@angular/core";

import { NewsService } from "../../../services/news.service";
import { LocationService } from "../../../services/location.service";
import { CountryCheckService } from "../../../services/country-check.service";
// import { checkApiIncludesCountry } from "countryapicheck";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  userCountry: string;
  countryCode: string;
  checkedCountryCode: string;
  mArticles: Array<any>;
  mSources: Array<any>;
  data: any;
  status = "";
  sources = [];
  onlySources = [];
  // selectedSource = "CNN";
  defaultCountryCode = "us";
  defaultCountry = "the United States";
  sourceChosen = false;
  selectedLanguage: "string";

  constructor(
    private locationService: LocationService,
    private countryCheckService: CountryCheckService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data) => {
      const countryData = data;
      this.countryCode = countryData.country.toLowerCase();
      const checkedCountryCode = this.countryCheckService.checkApiIncludesCountry(
        this.countryCode
      )
        ? // const checkedCountryCode = checkApiIncludesCountry(this.countryCode)
          this.countryCode
        : this.defaultCountryCode;

      this.userCountry =
        this.checkedCountryCode !== this.countryCode
          ? this.defaultCountry
          : countryData.country_name;

      this.getCountryNews(checkedCountryCode);
    });

    // get list of news sources via news API service
    // this.newsService.getSources("/sources?").subscribe(
    //   (data) => {
    //     this.status = data.status;
    //     this.sources = data.sources;

    //     console.log(
    //       'ngOnInit getSources function ran with status "',
    //       this.status,
    //       '" and retrieved an array of',
    //       +this.sources.length,
    //       "sources."
    //     );
    //   },
    //   (err) => {
    //     console.log("an error occured: ", err);
    //   }
    // );
  }

  getCountryNews(countryCode: string) {
    this.newsService
      .getNews("top-headlines?country=" + countryCode)
      .subscribe((data) => {
        this.mArticles = data.articles;
      });
  }
}
