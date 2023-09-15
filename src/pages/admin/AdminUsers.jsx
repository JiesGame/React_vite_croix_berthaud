import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { userAdminDeleteFetch, userFetch, usersFetch } from "../../services/axiosAdmin";
import { toastInfo, toastError } from "../../services/toast";

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
    <div className="text-center">
      <h1>Gestion des utilisateurs</h1>
      <Link to='../admin_home'>Retour au tableau administrateur</Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Suppression</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.email}</th>
                <th>{user.is_admin ? 'admin' : 'utilisateur'}</th>
                <th>
                  {user.is_admin ?
                    <button className="bg-gray-700 text-white cursor-not-allowed text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
                    :
                    <button className="bg-red-500 hover:bg-red-600 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDeleteClick(user.id)}>Supprimer</button>
                  }
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isDeleteConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded shadow-md">
                <p className="mb-4">Êtes-vous sûr de vouloir supprimer le compte de {infoDeleteUser.email} ?</p>
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => onSubmit(infoDeleteUser.id)}
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
    </div>
  )
}
