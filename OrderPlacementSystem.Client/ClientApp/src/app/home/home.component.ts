import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public specials: Special[];
  public selectedOrder: Special[] = [];
  public totalPrice = 0;
  public isActive = true;

  constructor(http: HttpClient, @Inject('BASE_APIURL') baseAPIUrl: string, private _sanitizer: DomSanitizer ) {
    http.get<Special[]>(baseAPIUrl +'Specials').subscribe(result => {
      this.specials = result;
    }, error => console.error(error));
  }

  //Get backgroundimage from path
  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  //Add Product to order 
  addToOrder(specialid) {
    let special = this.specials.filter((special: Special) => special.id === specialid)[0];
    this.selectedOrder.push(special);
  
    this.GetFormattedTotalPrice(special["basePrice"]);
  }

  //Return total order 
  GetFormattedTotalPrice(value) {
    this.totalPrice += value;
    return this.totalPrice.toFixed(2);
  }

  //Remove product from order and recalculate total amount
  removeItem(id,value) {
    this.GetFormattedTotalPrice(value * -1);

    let special = this.specials.filter((special: Special) => special.id === id)[0];

    this.selectedOrder.forEach((item, index) => {
      if (item === special) this.selectedOrder.splice(index, 1);
    });

  }

  placeorder() {
    sessionStorage.setItem('placedOrder', JSON.stringify(this.selectedOrder));
  }
}

interface Special {
  id: number;
  Name: string;
  Description: string;
  BasePrice: number;
  ImageUrl: string;
}
