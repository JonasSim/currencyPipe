# Angular 5: How to use Currency Pipe inside the input to get formatted currency

Founded the efficient way to use the default currency pipe provided by the angular to format the currecncy while 
user is typing the value inside the input.

I had used the Indian currency (INR) in the code. You just need to change currency as per the requirement and also need to update the currency symbol inside the conditions.

For Example we will use for USD:

change INR to USD

       this.formattedAmount = this.currencyPipe.transform(this.value, 'USD', true, '1.0-0');     
 
 also need to update "₹" sign with the currency symbol in our case replace with "$"
 
      if (element.target.value.indexOf('$') !== -1) {
              this.formattedAmount = this.formattedAmount.replace(/[$,]/g, "")
