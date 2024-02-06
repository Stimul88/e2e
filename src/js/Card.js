import {isValidInn} from "./validator";

export default class Card{
  constructor() {
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    this.el = document.querySelector('.form-control');
    this.cardArray = Array.from(document.querySelectorAll('.card'));
    this.addClass = this.addClass.bind(this)


    if(!isNaN(parseFloat(this.el.value)) && isFinite(this.el.value)) {
      if(isValidInn(this.el.value)) {
        const numberArray = []

        for(const i of this.el.value) {
          numberArray.push(i)
        }
        switch (numberArray[0]) {
          case '4':
            this.addClass()
            this.removeClass('card-visa')
            break;

          case '5':
            this.addClass()
            this.removeClass('card-mastercard')
            break;
      }
        if (numberArray[0] + numberArray[1] === '34' || numberArray[0] + numberArray[1] === '37') {
          this.addClass()
          this.removeClass('card-amex')
        }

        if (numberArray[0] + numberArray[1] === '22') {
          this.addClass()
          this.removeClass('card-mir')
        }

        if (numberArray[0] + numberArray[1] === '30' || numberArray[0] + numberArray[1] === '36') {
          this.addClass()
          this.removeClass('card-diners')
        }

        if (numberArray[0] + numberArray[1] === '60' || numberArray[0] + numberArray[1] === '62'
          || numberArray[0] + numberArray[1] === '64'|| numberArray[0] + numberArray[1] === '65') {
          this.addClass()
          this.removeClass('card-discover')
        }

        if (numberArray[0] + numberArray[1] === '35') {
          this.addClass()
          this.removeClass('card-jcb')
        }
      }
    }
  }

  addClass() {
    this.cardArray.forEach(i => i.classList.add('bottom-card'))
  }

  removeClass(name) {
    this.cardArray.find(i => i.classList.contains(name)).classList.remove('bottom-card')
  }
}