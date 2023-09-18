import { useState, useEffect } from "react";
import { donationFetch } from "../services/axiosStripe";

export const Donation = () => {
  const [amount, setAmount] = useState("");
  const [stripeURL, setStripeURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    amount < 0 ? setAmount(0) : amount;
    handlePayment(amount);
  };
  const handlePayment = () => {
    const data = JSON.stringify({"Amount":amount})
    donationFetch(data, setStripeURL);
  }
  useEffect(() => {
    if (stripeURL) {
      window.location.href = stripeURL;
    }
  }, [stripeURL]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Montant (en euros)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Payer avec Stripe</button>
    </form>
  );
};