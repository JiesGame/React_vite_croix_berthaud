/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';
import { toastError, toastSuccess } from '../../services/toast';
import { createArticleFetch } from '../../services/axiosAdmin';
import { useState } from 'react';

export const AdminCreateArticle = () => {
  const [dataArticle, setDataArticle] = useState({title:"",content:"", category:"news", private:false})
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setDataArticle({
      ...dataArticle,
      [name]: newValue,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({"article":dataArticle})
    try {
      const createArticle = await createArticleFetch(data);
      if(createArticle) {
        toastSuccess("L'article a été créé !");
        navigate('/');
      }
    } catch(error) {
      toastError("L'article n'a pas pu être créé.");
    }
  }

  return (
    <div className="flex items-center justify-center my-14">
      <div className="w-[30rem] h-fit">
    <form className="bg-white shadow-lg rounded h-full" onSubmit={onSubmit}>
    <div className="mt-8">
            <h1 className="flex text-2xl justify-center items-center primary-bg w-full text-white h-12 rounded-t font-semibold">
              Création d'un article
            </h1>
      <div className="px-10 mt-4">
        <label className="block primary text-xl font-semibold mb-2" htmlFor="title">Titre :</label>
        <input
          className='bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-12 placeholder-gray-300 font-medium dark'
          type="text"
          id="title"
          name="title"
          value={dataArticle.title}
          onChange={handleChange}
        />
      </div>
      <div className='px-10 mt-4'>
        <label className="block primary text-xl font-semibold mb-2" htmlFor="content">Contenu :</label>
        <textarea
          className='bg-white appearance-none border-2 light-gray-border rounded-lg w-full py-2 px-4 primary leading-tight focus:outline-none focus:bg-white focus:ring-0 shadow-lg h-36 placeholder-gray-300 font-medium dark'
          id="content"
          name="content"
          value={dataArticle.content}
          onChange={handleChange}
        />
      </div>
      <div className='flex gap-2 px-10 mt-4'>
        <label className="block primary text-xl font-semibold mb-2" htmlFor="category">Catégorie :</label>
      <select className="pb-1 border-[1px] shadow-md" id="category" name="category" value={dataArticle.category} onChange={handleChange}>
        <option value="news">News</option>
        <option value="maison_de_quartier">Maison de quartier</option>
        <option value="programme">Programme</option>
        <option value="a_l_affiche">A l'affiche</option>
        <option value="activites_enfants">Activités enfants</option>
        <option value="activites_adultes">Activités adultes</option>
      </select>
      </div>
      <div className='flex gap-2 px-10 mt-4'>
        <label className='block primary text-xl font-semibold mb-2' htmlFor="private">Privé :</label>
        <div className='flex justify-center items-center pb-1'>
        <input
          className='w-[18px] h-[20px]'
          type="checkbox"
          id="private"
          name="private"
          checked={dataArticle.private}
          onChange={handleChange}
        />
        </div>
      </div>
      <div className='flex justify-center mt-8'>
      <button className="button primary-bg text-white font-bold py-2 px-4 w-32 rounded focus:outline-none focus:shadow-outline cursor-pointer mb-10" type="submit">Envoyer</button>
      </div>
      </div>
    </form>
    </div>
    </div>
  );
};