import ColaGenerator from './components/colaGenerator.js';
import Vendingmachine from './components/vendingmachine.js';

const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

await colaGenerator.setup();
vendingmachine.setup();
