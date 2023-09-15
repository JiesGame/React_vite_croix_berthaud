import { Link } from "react-router-dom"

export const AdminHome = () => {
  return (
    <div className='text-center'>
      <h1>Bienvenue dans le panneau administrateur</h1>
      <div className="justify-between">
        <Link to='../admin_articles'>Gérer les articles</Link>
        <Link to='../admin_users'>Gérer les utilisateurs</Link>
        <Link to='../admin_activities'>Gérer les activités</Link>
      </div>
    </div>
  )
}
