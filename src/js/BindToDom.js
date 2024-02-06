export default class BindToDom{
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup () {
    return `
          <h2>Проверьте номер своей кредитной карты</h2>
          <ul class="card-container">
            <li class="card card-visa"></li>
            <li class="card card-mastercard"></li>
            <li class="card card-amex"></li>
            <li class="card card-mir"></li>
            <li class="card card-diners"></li>
            <li class="card card-discover"></li>
            <li class="card card-jcb"></li>
          </ul>
          <form class="innogrn-form-widget" data-widget="innogrn-form-widget">
          <div class="control">
                <label for="innogrn-input"></label>
                <input id="innorgn-input" data-id="innogrn-input" type="text" class="form-control" placeholder="Credit card number">
            </div>
            <button class="submit" data-id="innogrn-submit">Click to Validate</button>
          </form>
        `;
  }

  static get submitSelector() {
    return '.submit';
  }

  static get inputSelector() {
    return '.form-control';
  }
  //
  static get selector() {
    return '.innogrn-form-widget';
  }

  bindToDOM() {
    this.parentEl.innerHTML = BindToDom.markup
    this.element = this.parentEl.querySelector(BindToDom.selector);
    this.submit = this.element.querySelector(BindToDom.submitSelector);
  }
}

