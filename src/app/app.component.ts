import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyPipe]
})
export class AppComponent {
  name = 'Angular 5: Currency pipe inside input';
  formattedAmount: string = '0';
  value: any;
  constructor(private currencyPipe: CurrencyPipe) {

  }

  transformAmount(element) {
    try {
      if (typeof (element.target.value) !== 'number')
        this.formattedAmount = this.currencyPipe.transform(this.value, 'INR', true, '1.0-0');
      // Remove or comment this line if you dont want
      // to show the formatted amount in the textbox.
      element.target.value = this.formattedAmount;
    } catch (e) {
      console.log(e);
    }
  }
  removeCurrencyPipeFormat(element) {
    try {
      if (element.target.value.indexOf('₹') !== -1) {
        this.formattedAmount = this.formattedAmount.replace(/[₹,]/g, "")
        element.target.value = this.formattedAmount;
      } else {
        this.formattedAmount = '0';
      }
    } catch (e) {
      console.log(e);
    }
  }
}
