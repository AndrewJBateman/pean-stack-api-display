import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Metal } from "../models/metal";
import { CompanyPerformance } from "../models/companyPerformance";
import { FrameworkMarketshare } from "../models/frameworkMarketshare";
import { GaugeData } from "../models/gaugeData";
import { CountryData } from "../models/countryData";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://pean-stack-apis.herokuapp.com";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  constructor(private http: HttpClient) {}

  getAllMetals(): Observable<Metal[]> {
    return this.http.get<Metal[]>(`${baseUrl}/metals`);
  }

  getCompanyPerformance(): Observable<CompanyPerformance[]> {
    return this.http.get<CompanyPerformance[]>(`${baseUrl}/companyPerformance`);
  }

  getFrameworkMarketshare(): Observable<FrameworkMarketshare[]> {
    return this.http.get<FrameworkMarketshare[]>(
      `${baseUrl}/frameworkMarketshare`
    );
  }

  getGaugeData(): Observable<GaugeData[]> {
    return this.http.get<GaugeData[]>(`${baseUrl}/gaugeData`);
  }

  getCountryData(): Observable<CountryData[]> {
    return this.http.get<CountryData[]>(`${baseUrl}/CountryData`);
  }

  createMetal(metal: Metal): Observable<Metal> {
    return this.http.post<Metal>(baseUrl, metal);
  }

  update(id: number, metal: Metal): Observable<Metal> {
    return this.http.put<Metal>(`${baseUrl}/${id}`, metal);
  }

  deleteMetal(id: number): Observable<Metal> {
    return this.http.delete<Metal>(`${baseUrl}/${id}`);
  }
}
