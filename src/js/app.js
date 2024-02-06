import BindToDom from "./BindToDom"
import Card from "./Card";

const container = document.querySelector('#container');
const form = new BindToDom(container);
const card = new Card()

form.bindToDOM();

form.element.addEventListener('submit', card.onSubmit);