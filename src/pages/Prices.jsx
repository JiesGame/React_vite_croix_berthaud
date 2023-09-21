/* eslint-disable react/no-unescaped-entities */
import { listActivitiesFetch } from '../services/axiosActivity';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Cookies from "js-cookie";
import '../App.css';

export const Prices = () => {
  const [dataActivities, setDataActivities] = useState([]);
  const isLoggedIn = Cookies.get('token') !== undefined ? true : false;

  useEffect(() => {
    listActivitiesFetch(setDataActivities);
  }, []);

  return (
    <>
      <article className='mx-[5%] sm:mx-[10%] md:mx-[15%] lg:mx-[20%]'>
        <div className="border-2 rounded-lg shadow-lg w-full my-10">
          <div className="primary-bg rounded-t py-3 text-center">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl">Tarifs des activités 2023 - 2024</h1>
          </div>
          <table className="w-full md:text-center">
            <thead>
              <tr className='border-b dark-bg white'>
                <th className="text-start md:text-center px-7 md:px-0">Activités</th>
                <th className="text-end md:text-center px-7 md:px-0">Prix</th>
                <th className='hidden md:table-cell'>Réduction -10%</th>
                <th className='hidden md:table-cell'>Réduction -20%</th>
              </tr>
            </thead>
            {
              dataActivities.map((activity) => (
                <tbody key={activity.id}>
                  <tr className='border-b dark'>
                    <td className="text-start md:text-center px-7 md:px-0 py-2">{activity.name}</td>
                    <td className="text-end md:text-center px-7 md:px-0">{activity.price}€</td>
                    <td className='hidden md:table-cell'>{activity.price * 90 / 100}€</td>
                    <td className='hidden md:table-cell'>{activity.price * 80 / 100}€</td>
                  </tr>
                </tbody>
              ))
            }
          </table>
          <div className="primary-bg text-white py-3 text-center text-lg font-bold">
            Informations importantes
          </div>
          <p className='py-1 px-2'>
            <span className='font-semibold'>Pour participer aux activités</span>, il faut prendre sa carte familiale d’adhésion à l’association, d’un montant annuel de 12 €. <span className='font-semibold'>Cette carte concerne le ou les parents et leurs enfants mineurs</span>.
          </p>
          <p className='py-1 px-2'>
            L’inscription à une activité se fait <span className='font-semibold'>obligatoirement par année complète</span>.
          </p>
          <p className='py-1 px-2'>
            Les cartes étant familiales, une <span className='font-semibold'>réduction de 10%</span> est appliquée à partir de la 2ème activité et de <span className='font-semibold'>20%</span> à partir de la 3ème activité sur la même carte. <span className='font-semibold'>Ces réductions s’appliquent sur l’activité la moins chère</span>.
          </p>
          <div className="primary-bg text-white rounded-b py-3" />
        </div>
          {isLoggedIn &&
            <div className='w-full flex flex-col items-center'>
              <Link to="/inscription" className="w-[140px] primary-bg button text-center text-white text font-bold rounded focus:outline-none focus:shadow-outline h-max p-2 px-4 mb-10">Vous inscrire aux activités</Link>
            </div>
          }
          {!isLoggedIn &&
            <div className='w-full flex flex-col items-center'>
              <p>Pour accéder au formulaire d'inscription aux activités vous devez être connecté</p>
              <Link to="/login" className="w-[140px] primary-bg button text-center text-white text font-bold rounded focus:outline-none focus:shadow-outline h-max p-2 px-4 mt-3 mb-10">Se connecter</Link>
            </div>
          }
      </article>
    </>
  );
};