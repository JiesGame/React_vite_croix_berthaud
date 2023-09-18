import { useEffect, useState } from "react";
import { userAdminDeleteFetch, userFetch, usersFetch } from "../../services/axiosAdmin";
import { toastInfo, toastError } from "../../services/toast";
import { AdminPanel } from "../../components/admin/AdminPanel";

export const AdminUsers = () => {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);
  const [infoDeleteUser, setInfoDeleteUSer] = useState({id:"", email:""})
  const[usersData, setUsersData] = useState([]);
  useEffect(() => {
    usersFetch(setUsersData);
  },[]);
  const handleDeleteClick = (id) => {
    console.log(id)
    userFetch(id, setInfoDeleteUSer);
    setIsDeleteConfirmation(true);
  };
  const onSubmit = async (id) => {
    setIsDeleteConfirmation(false)
    try {
      await userAdminDeleteFetch(id);
      toastInfo("Le compte a bien été supprimé.");
      window.location.reload();
    } catch(error) {
      toastError("Le compte n'a pas pu être supprimé.");
    }
  };
  return (
    <>
      <AdminPanel />
      <h1 className="text-4xl primary my-5 text-center">Gestion des utilisateurs</h1>
      <article className='flex justify-center'>
        <div className="sm:w-[700px] rounded-lg shadow-lg my-10 primary-bg">
        <table className="w-full my-3">
          <thead>
            <tr className="text-white text-center">
              <th className="pb-3 sm:pl-4 hidden sm:block">ID</th>
              <th className="pb-3">Email</th>
              <th className="pb-3 hidden sm:block">Rôle</th>
              <th className="pb-3">Suppression</th>
            </tr>
          </thead>
          <tbody className='white-bg'>
            {usersData.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="hidden sm:block">{user.id}</td>
                <td>{user.email}</td>
                <td className="hidden sm:block">{user.is_admin ? 'admin' : 'utilisateur'}</td>
                <td>
                  {user.is_admin ?
                    <button className="bg-gray-700 text-white cursor-not-allowed font-bold py-2 sm:px-4 px-2 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
                    :
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:px-4 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDeleteClick(user.id)}>Supprimer</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {isDeleteConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="dark-bg white p-4 rounded shadow-md">
              <p className="mb-4">Êtes-vous sûr de vouloir supprimer le compte de <span className="font-bold">{infoDeleteUser.email}</span> ?</p>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onSubmit(infoDeleteUser.id)}
                >
                  Oui
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold ml-3 py-2 px-4 rounded"
                  onClick={() => setIsDeleteConfirmation(false)}
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  )
}
