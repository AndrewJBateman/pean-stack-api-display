import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

import { Crypto } from "../models/crypto";

@Injectable()
export class CryptoService {
  result: any;
  currencyCode: string;
  display: string;

  constructor(private http: HttpClient) {}

  // function to get crypto prices from the API - no API key required.
  getPrices(): Observable<Crypto> {
    const fsymsList =
      "ADA,BCH,BTC,BTS,DASH,EOS,ETH,ETC,LTC,NEO,REP,QTUM,TRX,USDT,XLM,XMR,XRP,ZRX,ZEC";
    return this.http
      .get<Crypto>(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" +
          fsymsList +
          "&tsyms=EUR"
      )
      .pipe(
        take(1),
      );
  }
}
