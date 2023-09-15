import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { toastInfo } from '../services/toast';
import { forgotPasswordFetch } from '../services/axiosUser';
import { useState } from 'react';

export const ForgotPassword = () => {
  const schema = yup.object().shape({
    email: yup.string().required("L'email est requis."),
  });

  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const userChangePassword = await forgotPasswordFetch(data);
      if(userChangePassword) {
        toastInfo("Un mail a été envoyé à l'adresse indiqué (sous réserve de l'existence d'un compte).");
      }
    } catch(error) {
      setErrorMessage(error);
    }
  }

  return (
    <div className='flex items-center justify-center my-14'>
      <div className="w-[30rem] h-fit">
        <form className="bg-white shadow-lg rounded h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h1 className='flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold'>
              Mot de passe oublié ?
            </h1>
            <div className='px-10 mt-4'>
              <label className="block primary text-xl font-semibold mb-2">
                Email
              </label>
              <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="exemple@email.fr" {...register('email')} />
              {errors.email?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.email?.message}</p>}
              </div>
          </div>
          <div className="flex justify-around items-center mb-8 mt-8">
            <input type="submit" className="button cursor-pointer primary-bg text-white font-bold py-2 px-4 w-fit rounded focus:outline-none focus:shadow-outline" value="Demander un lien de réinitialisation"/>
          </div>
          <div>
            <div className='px-6 mb-2'>
              <hr  className='light-gray-border border-[1px]'/>
            </div>
            <div className='flex gap-2 justify-center'>
              <p className='font-small text-md primary my-1'>
                Mot de passe retrouvé ?
              </p>
              <Link to="/login" className="my-1 text-center flex justify-center font-medium text-md primary hover:underline">
                Se connecter
              </Link>
            </div>
            <div className='mb-10 flex gap-2 justify-center'>
              <p className='font-small text-md primary my-3'>
                Pas encore de compte ?
              </p>
              <Link to="/register" className="my-3 text-center flex justify-center font-medium text-md primary hover:underline">
                S'inscrire
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}