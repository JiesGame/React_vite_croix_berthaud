/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useAtom } from "jotai";
import { userAtom } from "../store/atoms";
import { toastSuccess, toastError } from "../services/toast";
import { changeProfileFetch } from "../services/axiosUser";

export const ChangeProfile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useAtom(userAtom);
  const schema = yup.object().shape({
    email: yup.string().email("L'adresse mail doit être valide"),
    email_confirmation: yup.string().oneOf([yup.ref("email"), null],"Les adresses mails ne correspondent pas"),
    password: yup.string().matches(/.{5,}/, {excludeEmptyString: true, message: "Le mot de passe doit faire entre 6 et 20 caractères."}).max(20, "Le mot de passe doit faire entre 6 et 20 caractères."),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], "Les mots de passe ne correspondent pas"),
    current_password: yup.string().required(),
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const userID = JSON.parse(Cookies.get("userInfo")).id;
      const userChangeProfil = await changeProfileFetch(data, userID, setUserInfo);
      if(userChangeProfil) {
        toastSuccess("Votre profil a été mis à jour.");
        navigate('/');
      }
    } catch(error) {
      toastError("Votre profil n'a pas pu être mis à jour.");
    }
  };

  return (
    <div className="flex items-center justify-center my-14">
      <div className="w-[30rem] h-fit">
        <form className="bg-white shadow-lg rounded h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <h1 className="flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold">
              Mettre à jour son profil
            </h1>
            <div className="px-10 mt-4">
              <label className="block primary text-xl font-semibold mb-2">
                Nouvelle adresse mail
              </label>
              <input className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium" type="text" placeholder="exemple@email.fr" {...register('email')} />
              {errors.email?.message && <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.email?.message}</p>}
            </div>
          </div>
          <div className="mt-8">
            <div className="px-10">
              <label className="block primary text-xl font-semibold mb-2">
                Confirmation de l'adresse mail
              </label>
              <input
                className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium"
                type="text"
                placeholder="exemple@email.fr"
                {...register("email_confirmation")}
              />
              {errors.email_confirmation?.message && (
                <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">
                  {errors.email_confirmation?.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-8">
            <div className="px-10">
              <label className="block primary text-xl font-semibold mb-2">
                Nouveau mot de passe
              </label>
              <input
                className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium"
                type="password"
                placeholder="Mot de passe..."
                {...register("password")}
              />
              {errors.password?.message && (
                <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.password?.message}</p>
              )}
            </div>
          </div>
          <div className="mt-8">
            <div className='px-10'>
              <label className="block primary text-xl font-semibold mb-2">
                Confirmation du mot de passe
              </label>
              <input
                className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium"
                type="password"
                placeholder="Mot de passe..."
                {...register("password_confirmation")}
              />
              {errors.password_confirmation?.message && (
                <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">
                  {errors.password_confirmation?.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-8">
            <div className='px-10'> 
              <label className="block primary text-xl font-semibold mb-2">
                Mot de passe actuel
              </label>
              <input
                className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium"
                type="password"
                placeholder="Mot de passe..."
                {...register("current_password")}
              />
              {errors.current_password?.message && (
                <p className="ml-1 pt-2 font-semibold text-red-500 text-sm">
                  {errors.current_password?.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <input
              type="submit"
              className="button primary-bg text-white font-bold py-2 px-4 w-32 rounded focus:outline-none focus:shadow-outline cursor-pointer mb-10"
              value="Mettre à jour"
            />
          </div>
        </form>
        <div className="my-6 flex gap-2 justify-center text-lg text-red-500">
          <p className='font-medium my-3'>
            Mécontent ?
          </p>
          <Link to="/delete_account" className="my-3 text-center flex justify-center font-bold text-md  hover:underline">
            Supprimer son profil
          </Link>
        </div>
      </div>
    </div>
  );
};