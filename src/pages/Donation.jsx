import { useState, useEffect } from "react";
import { donationFetch } from "../services/axiosStripe";

export const Donation = () => {
  const [stripeURL, setStripeURL] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [realAmount, setRealAmount] = useState("");
  const [reduction, setReduction] = useState("");

  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(amount);
    const reductionAmount = amount * 0.66;
    setReduction(reductionAmount.toFixed(2));
    const costAfterReduction = amount - reductionAmount;
    setRealAmount(costAfterReduction.toFixed(2));
  };

  const onSubmit = async (selectedAmount, e) => {
    e.preventDefault();
    const amount = JSON.stringify({"Amount":selectedAmount});
    donationFetch(amount, setStripeURL);
  }

  useEffect(() => {
    if (stripeURL) {
      window.location.href = stripeURL;
    }
  }, [stripeURL]);

  return (
    <div className="flex items-center justify-center my-14">
      <div className="w-[30rem] h-fit">
        <form
          className="bg-white shadow-lg rounded h-full pb-6"
          onSubmit={(e) => onSubmit(selectedAmount, e)}>
          <div className="mb-4">
            <h1 className="flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold uppercase">
              mon don
            </h1>
            <div className="px-10">
              <ul className="flex justify-between py-6 gap-4 text-center dark font-medium">
                <li
                  className={`border-[1px] py-2 px-4 w-full shadow-lg rounded cursor-pointer ${
                    selectedAmount === 10 ? "primary-bg text-white" : ""
                  }`}
                  onClick={() => handleAmountSelection(10)}>
                  10 €
                </li>
                <li className={`border-[1px] py-2 px-4 w-full shadow-lg rounded cursor-pointer ${
                    selectedAmount === 25 ? "primary-bg text-white" : ""
                  }`}
                  onClick={() => handleAmountSelection(25)}>
                  25 €
                </li>
                <li className={`border-[1px] py-2 px-4 w-full shadow-lg rounded cursor-pointer ${
                    selectedAmount === 50 ? "primary-bg text-white" : ""
                  }`}
                  onClick={() => handleAmountSelection(50)}>
                  50 €
                </li>
                <li className={`border-[1px] py-2 px-4 w-full shadow-lg rounded cursor-pointer ${
                    selectedAmount === 100 ? "primary-bg text-white" : ""
                  }`}
                  onClick={() => handleAmountSelection(100)}>
                  100 €
                </li>
              </ul>
              <div className="flex">
                <input
                  className="bg-white appearance-none border-[1px] rounded-l-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium"
                  type="number"
                  min="1"
                  placeholder="Montant de votre don"
                  value={customAmount}
                  onChange={(e) => {
                    handleAmountSelection(e.target.value);
                  }}
                />
                <div className="font-medium w-fit py-2 px-4 rounded-r-lg light-gray-bg flex justify-center items-center shadow-lg border-[1px]">
                  €
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center mb-8 mt-8">
            <input
              type="submit"
              className="cursor-pointer primary-bg button text-white font-bold py-2 px-4 w-fit rounded focus:outline-none focus:shadow-outline"
              value={!selectedAmount || selectedAmount <=0 ? "Faire un don" : `Je donne ${selectedAmount} €`}
            />
          </div>
          <div className="px-10">
            {realAmount > 0 &&
              <div className="px-6 mb-2 text-white primary-bg text-center rounded p-2">
                <p>
                  Si je suis imposable, mon don ne me coûte réellement que {realAmount} € après réduction fiscale. (réduction de {reduction} € à hauteur de 20% du revenu imposable)
                </p>
              </div>
            }
          </div>
        </form>
      </div>
    </div>
  );
};