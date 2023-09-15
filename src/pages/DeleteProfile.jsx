/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../store/atoms";
import { toastError, toastInfo } from "../services/toast";
import { useState } from "react";
import { deleteProfileFetch } from "../services/axiosUser";

export const DeleteProfile = () => {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useAtom(userAtom);
  const schema = yup.object().shape({    
    current_password: yup.string().required(),
  });

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsDeleteConfirmation(false)
    try {
      const userDeleteProfil = await deleteProfileFetch(data, setUserInfo);
      if(userDeleteProfil) {
        toastInfo("Votre compte a bien été supprimé.");
        navigate('/');
      }
    } catch(error) {
      toastError("Votre compte n'a pas pu être supprimé.");
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteConfirmation(true);
  };

  return (
    <div className="flex items-center justify-center my-14">
      <div className="w-[30rem] h-fit">
        <form className="bg-white shadow-lg rounded h-full py-2 border-[1px] border-t">
          <div className="mb-4">
            <div className='px-10 mt-4'>
              <p className="primary font-semibold mb-6">
                Afin de confirmer la suppression de votre profil, merci d'indiquer votre mot de passe actuel.
              </p>
              <input
                className="bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium"
                type="password"
                placeholder="Mot de passe..."
                {...register("current_password")}
              />
              {errors.current_password?.message && (<p className="ml-1 pt-2 font-semibold text-red-500 text-sm">{errors.current_password?.message}</p>)}
            </div>
          </div>
          <p className="font-bold text-center text-red-500">
            Attention cette action est irréversible !
          </p>
          <div className="flex justify-around items-center mb-8 mt-6">
            <input className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline w-fit text-center" onClick={handleDeleteClick} value="Supprimer le profil"/>
          </div>
          {isDeleteConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded shadow-md">
                <p className="mb-4">Êtes-vous sûr de vouloir supprimer votre profil ?</p>
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Oui
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                    onClick={() => setIsDeleteConfirmation(false)}
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
