import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { usersFetch } from "../../services/axiosAdmin";

export const AdminUsers = () => {
  const[usersData, setUsersData] = useState([])
  useEffect(() => {
    usersFetch(setUsersData);
  },[])

  return (
    <div className="text-center">
      <h1>Gestion des utilisateurs</h1>
      <Link to='../admin_home'>Retour au tableau administrateur</Link>
      <div>
      {usersData.map((user) => (
        <p key={user.id}>{user.id} - {user.email} - {user.is_admin ? 'admin' : 'utilisateur'}</p>
      ))}
      </div>
    </div>
  )
}
