/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { loginFetch, registerFetch } from '../services/axiosUser';
import { toastSuccess } from '../services/toast';
import { useAtom } from 'jotai';
import { userAtom } from '../store/atoms';

export const Register = () => {
  const schema = yup.object().shape({
    email: yup.string().email("La donnée fournie ne correspond pas à un email.").required("L'email est nécessaire."),
    password: yup.string().min(6, "Le mot de passe est nécessaire et doit faire entre 6 et 20 caractères.").max(20, "Le mot de passe est nécessaire et doit faire entre 6 et 20 caractères.").required(),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], "Les mots de passe ne correspondent pas").required("La confirmation du mot de passe est nécessaire."),
    confirmationCGU: yup.bool().oneOf([true], "Vous devez accepter les conditions générales d'utilisation.")
  });
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
    }
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [userInfo, setUserInfo] = useAtom(userAtom);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userRegister = await registerFetch(data);
      if(userRegister) {
        const userLogin = await loginFetch(data, setUserInfo);
        if(userLogin) {
          toastSuccess('Votre compte a bien été créé et vous êtes connectés !');
          navigate('/');
        }
      }
    } catch(error) {
      setErrorMessage(error);
    }
  };

  return (
    <div className='flex items-center justify-center my-14'>
      <div className="w-[30rem] h-fit">
        <form className="bg-white shadow-lg rounded h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h1 className='flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold'>
              Créer un compte
            </h1>
            <div className='px-10 mt-4'>
              <label className="block primary text-xl font-semibold mb-2">
                Email
              </label>
              <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="exemple@email.fr" {...register('email')} />
              {errors.email?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.email?.message}</p>}
            </div>
          </div>
          <div className="mt-8">
            <div className='px-10'>
              <label className="block primary text-xl font-semibold mb-2">
                Mot de passe
              </label>
              <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="password" placeholder="Mot de passe" {...register('password')} />
              {errors.password?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.password?.message}</p>}
            </div>
          </div>
          <div className="mt-8">
            <div className='px-10'>
              <label className="block primary text-xl font-semibold mb-2">
                Confirmation du mot de passe
              </label>
              <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="password" placeholder="Confirmation du mot de passe..." {...register('password_confirmation')} />
              {errors.password_confirmation?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.password_confirmation?.message}</p>}
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center mt-8'>
              <input type="checkbox" name="checkbox" className="w-4 h-4" {...register('confirmationCGU')}/>
              <label className="ml-2 text-sm font-medium primary">
                J'accepte les 
                <Link to="#" className='pl-1 hover:underline font-bold'>
                  Conditions Générales d'Utilisation
                </Link>
              </label>
            </div>
            {errors.confirmationCGU?.message && <p className="mt-2 flex justify-center ml-1 font-semibold text-red-500 text-sm">{errors.confirmationCGU?.message}</p>}
          </div>
          <div className="flex justify-around items-center mb-8 mt-8">
            <input type="submit" className="primary-bg text-white font-bold py-2 px-4 w-32 rounded focus:outline-none focus:shadow-outline" value="S'enregistrer"/>
          </div>
          <div>
            <div className='px-6 mb-2'>
              <hr  className='light-gray-border border-[1px]'/>
            </div>
            <div className='mb-10 flex gap-2 justify-center'>
              <p className='font-small text-md primary my-3'>
                Déjà adhérent ?
              </p>
              <Link to="/login" className="my-3 text-center flex justify-center font-medium text-md primary hover:underline">
                Se connecter
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};