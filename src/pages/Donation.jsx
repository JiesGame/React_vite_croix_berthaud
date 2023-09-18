import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { CheckoutForm } from '../components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51N8ifAGS0bW29qByBYwRtuoJNhpU1bugSBLnyi6HS0PmEROXzxlUMP9zBgyXAgtJERAxt9Rcifz6bEqXbrSDUwRL00Ozddaz0l');

export const Donation = () => {

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};