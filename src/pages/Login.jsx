import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { loginFetch } from '../services/axiosUser';
import { toastError, toastSuccess } from '../services/toast';
import { useAtom } from 'jotai';
import { userAtom } from '../store/atoms';

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("L'email est requis."),
    password: yup.string().required("Le mot de passe est requis.")
  });

  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useAtom(userAtom);

  const onSubmit = async (data) => {
    try {
      const userLogin = await loginFetch(data, setUserInfo);
      if(userLogin) {
        toastSuccess('Vous êtes connectés !');
        navigate('/');
      }
    } catch(error) {
      toastError("Adresse mail et / ou mot de passe incorrect(s).");
    }
  }

  return (
    <div className='flex items-center justify-center my-14'>
      <div className="w-[30rem] h-fit">
        <form className="bg-white shadow-lg rounded h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h1 className='flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold'>
              Se connecter
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
          <div className="flex justify-around items-center mb-8 mt-8">
            <input type="submit" className="cursor-pointer primary-bg button text-white font-bold py-2 px-4 w-32 rounded focus:outline-none focus:shadow-outline" value="Connexion"/>
            <Link to="/forgot_password" className="font-medium text-md primary hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>
          <div>
            <div className='px-6 mb-2'>
              <hr  className='light-gray-border border-[1px]'/>
            </div>
            <div className='mb-10 flex gap-2 justify-center'>
              <p className='font-small text-md primary my-3'>Pas encore adhérent ?</p>
              <Link to="/register" className="my-3 text-center flex justify-center font-medium text-md primary hover:underline">
                Créer un compte
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};