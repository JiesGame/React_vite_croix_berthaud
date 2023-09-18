import { useState, useEffect } from "react";
import { donationFetch } from "../services/axiosStripe";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Donation = () => {
  const schema = yup.object().shape({
    amount: yup.number().min(1, "Le montant minimum est de un euro.").required().typeError("Merci d'indiquer le montant du don en chiffre.")
  });
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const [stripeURL, setStripeURL] = useState("");
  const onSubmit = async (data) => {
    const amount = JSON.stringify({"Amount":data.amount})
    donationFetch(amount, setStripeURL);
  }
  useEffect(() => {
    if (stripeURL) {
      window.location.href = stripeURL;
    }
  }, [stripeURL]);

  return (
    <div className='flex items-center justify-center my-14'>
      <div className="w-[30rem] h-fit">
        <form className="bg-white shadow-lg rounded h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h1 className='flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold'>
              Donne !
            </h1>
            <div className='px-10 mt-4'>
              <label className="block primary text-xl font-semibold mb-2">
                Tu donnes combien ?!
              </label>
              <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="number" min="1" placeholder="Montant du don en euros..." {...register('amount')} />
              {errors.amount?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.amount?.message}</p>}
            </div>
          </div>
          <div className="flex justify-around items-center mb-8 mt-8">
            <input type="submit" className="cursor-pointer primary-bg button text-white font-bold py-2 px-4 w-32 rounded focus:outline-none focus:shadow-outline" value="C'est tout ???"/>
          </div>
          <div>
            <div className='px-6 mb-2'>
              <hr  className='light-gray-border border-[1px]'/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};