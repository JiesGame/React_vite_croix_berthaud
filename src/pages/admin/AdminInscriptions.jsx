/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { deleteUserInscriptionFetch, usersInscriptionFetch, validateUserInscriptionFetch } from "../../services/axiosAdmin";
import { AdminPanel } from "../../components/admin/AdminPanel";

export const AdminInscriptions = () => {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [activityID, setActivityID] = useState('');
  useEffect(() => {
    usersInscriptionFetch(setUsersData);
  },[]);
  const handleDeleteClick = (id) => {
    setIsDeleteConfirmation(true);
    setActivityID(id);
  };
  const handleValidateClick = (id) => {
    validateUserInscriptionFetch(id);
  };
  const onSubmit = async () => {
    setIsDeleteConfirmation(false);
    deleteUserInscriptionFetch(activityID);
  };
  return (
    <>
      <AdminPanel />
      <h1 className="text-4xl primary mt-5 text-center">Gestion des inscriptions</h1>
      <article className='w-full'>
        {usersData.length < 1 ? (
          <h2 className="text-2xl primary my-5 text-center">Aucune inscription en cours</h2>
        ) : (
          <>
            {usersData.map((user) => (
              <div key={user.id}>
                <h2 className="text-2xl primary mt-5 text-center">{user.email}</h2>
                <div className="mx-auto sm:w-[700px] rounded-lg shadow-lg my-5 primary-bg">
                  <table className="w-full my-3">
                    <thead>
                      <tr className="text-white text-center">
                        <th className="pb-3">Membres</th>
                        <th className="pb-3">Activités</th>
                        <th className="pb-3">Validation</th>
                      </tr>
                    </thead>
                    <tbody className='white-bg'>
                      {user.family_members.map((family_member) => (
                        <tr key={family_member.id} className="text-center">                
                          <td className="">
                            {family_member.firstname} {family_member.lastname}
                          </td>
                          <td className="">
                            {family_member.activities.map((activity, index) => (
                              <div key={activity.id}>
                                {!family_member.family_member_activities[index].validation &&
                                  <p>{activity.name}</p>
                                }
                              </div>
                            ))}
                          </td>
                          <td>
                            {family_member.family_member_activities.map((activity, index) => (
                              <div key={index}>
                                {!activity.validation &&
                                  <>
                                    <button className="primary-bg text-white font-bold py-2 sm:px-4 px-2 rounded focus:outline-none focus:shadow-outline"onClick={() => handleValidateClick(activity.id)}>Oui</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:px-4 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => handleDeleteClick(activity.id)}>Non</button>
                                  </>
                                }                  
                              </div>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </>
        )}
        {isDeleteConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="dark-bg white p-4 rounded shadow-md">
              <p className="mb-4">Êtes-vous sûr de vouloir annuler l'inscription</p>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onSubmit()}
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
