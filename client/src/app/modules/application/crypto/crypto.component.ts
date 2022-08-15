import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CryptoService } from "./crypto-services/crypto.service";

@Component({
  selector: "app-crypto",
  templateUrl: "./crypto.component.html",
  styleUrls: ["./crypto.component.css"],
})
export class CryptoComponent implements OnInit {
  objectKeys = Object.keys;

  cryptos: any;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getPrices().subscribe((res) => {
      this.cryptos = res;
    });
  }

  cryptoTrackbyFn(index: number, item: any): number {
    return item.cryptoId;
  }
}
