/* eslint-disable react/no-unescaped-entities */
import '../App.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const NotFound = () => {
  return (
    <>
      <div id="NotFound" className='font-sans'>
        <img className='w-full h-screen object-cover' src='../src/assets/img/bg.webp' />
        <div className='w-full h-screen absolute top-0 left-0'>
          <section className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
            <div className='text-white text-9xl font-bold flex gap-4'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <h1 className='font-bold text-9xl text-white'>404</h1>
            </div>
            <p className='py-6 text-white font-bold text-2xl uppercase text-center'>nous sommes désolés, mais la page que vous avez demandée n'a pas été trouvée</p>
            <div className='flex gap-10'>
              <Link to="/">
                <button className=' text-white bg-gray-800 border-solid border-2 border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-full text-center text-sm px-5 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 uppercase w-44'>accueil</button>
              </Link>
              <Link to="#contact">
                <button className='bg-transparent border-solid border-2 border-white text-white font-bold rounded-full text-center text-sm px-5 py-3 mr-2 mb-2 uppercase hover:text-black w-44'>contactez-nous</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};