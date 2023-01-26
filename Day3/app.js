import { factorial } from './factorial.js';
try {
  console.log(factorial(171));
} catch (error) {
  console.log(error.message);
}
