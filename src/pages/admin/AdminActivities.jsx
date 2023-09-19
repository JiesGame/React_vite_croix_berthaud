import { AdminPanel } from "../../components/admin/AdminPanel";
import { listActivitiesFetch } from "../../services/axiosActivity";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AdminActivities = () => {
  const [dataActivities, setDataActivities] = useState([]);

  useEffect(() => {
    listActivitiesFetch(setDataActivities);
  },[])

  return (
    <>
      <AdminPanel />
      <h1 className="text-4xl primary my-5 text-center">Gestion des activités</h1>
      <div className="flex justify-center whitespace-nowrap">
        <Link to='../admin_create_activity' className="primary-bg text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-cyan-300 button">Créer une activité</Link>
      </div>
      <article className='flex justify-center'>        
        <div className="sm:w-[700px] rounded-lg shadow-lg my-10 primary-bg">
          <table className="w-full my-3">
            <thead>
              <tr className="text-white text-center">
                <th className="pb-3 sm:pl-4 hidden sm:block">ID</th>
                <th className="pb-3">Activité</th>
                <th className="pb-3">Prix</th>
                <th className="pb-3 hidden sm:block">Période</th>
                <th className="pb-3">Edition</th>
              </tr>
            </thead>
            <tbody className='white-bg'>
              {dataActivities.map((activity) => (
                <tr key={activity.id} className="text-center">
                  <td className="hidden sm:block">{activity.id}</td>
                  <td>{activity.name}</td>
                  <td>{activity.price}</td>
                  <td className="hidden sm:block">{activity.period}</td>
                  <td>
                      <Link to={`/admin_edit_activity/${activity.id}`} className="primary-bg button text-white font-bold py-2 sm:px-4 px-2 rounded focus:outline-none focus:shadow-outline">Editer</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </>
  )
}
