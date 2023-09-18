import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { donationFetch } from '../services/axiosStripe';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if(!error){
      console.log("Token généré:", paymentMethod);
      const data = {"donnés":{}}
      donationFetch(data);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>Faire une donation</button>
    </form>
  )
};