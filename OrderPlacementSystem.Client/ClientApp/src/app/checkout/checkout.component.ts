import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-counter-component',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  public orderedItems: [] = [];
  public url: string;
  public _http: HttpClient;
  constructor(http: HttpClient,@Inject('BASE_APIURL') baseAPIUrl: string, private router: Router) {
    this.url = baseAPIUrl;
    this._http = http;
  }

  ngOnInit() {

    const KaizenStorage: [] = JSON.parse(sessionStorage.getItem(`placedOrder`));
    this.orderedItems = KaizenStorage;

    if (!this.orderedItems.length) {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);  //5s
    }
  }

  placeOrder() {
 
  }

}
