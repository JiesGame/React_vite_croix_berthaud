/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

export const AdminPanel = () => {
  
  return (
    <article className='text-center flex 2xl:fixed justify-center'>
      <div className="px-5 2xl:w-[250px] sm:w-[600px] w-auto">
        <div className="dark-bg navbar white border-2 rounded-lg shadow-lg w-full my-10">
          <div className="primary-bg rounded-t py-3">
            <p className="text-white font-bold px-2">
              Page d'administration des :
            </p>
          </div>
          <div className='2xl:py-0 sm:py-2 2xl:mx-0 sm:mx-4 grid sm:grid-cols-1 grid-cols-2'>
            <Link to='/admin_articles' className='font-semibold 2xl:block 2xp:px-0 sm:px-6 px-1'>Articles</Link>
            <Link to='/admin_users' className='font-semibold 2xl:block 2xp:px-0 sm:px-6 px-1'>Utilisateurs</Link>
            <Link to='/admin_activities' className='font-semibold 2xl:block 2xp:px-0 sm:px-6 px-1'>Activités</Link>
            <Link to='/admin_inscriptions' className='font-semibold 2xl:block 2xp:px-0 sm:px-6 px-1'>Inscriptions</Link>
          </div>
          <div className="flex md:justify-between md:flex-row md:items-center primary-bg text-white rounded-b py-1 flex-col items-center" />
        </div>
      </div>
    </article>
  )
};