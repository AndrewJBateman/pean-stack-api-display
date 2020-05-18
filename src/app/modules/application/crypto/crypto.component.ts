import { Component, OnInit } from "@angular/core";
import { CryptoService } from "../../../services/crypto.service";

@Component({
  selector: "app-crypto",
  templateUrl: "./crypto.component.html",
  styleUrls: ["./crypto.component.css"],
})
export class CryptoComponent implements OnInit {
  objectKeys = Object.keys;

  cryptos: any;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService.getPrices().subscribe((res) => {
      this.cryptos = res;
    });
  }
}
