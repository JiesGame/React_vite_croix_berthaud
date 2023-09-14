/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useParams } from 'react-router-dom';
import { toastError, toastSuccess } from '../../services/toast';
import { useEffect, useState } from 'react';
import { showArticleFetch } from '../../services/axiosArticle';
import { updateArticleFetch } from '../../services/axiosAdmin';

export const AdminEditArticle = () => {
  const [dataArticle, setDataArticle] = useState({title:"",content:"", category:"news", private:false})
  const navigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setDataArticle({
      ...dataArticle,
      [name]: newValue,
    });
  };

  useEffect(() => {
    showArticleFetch(id, setDataArticle)
  },[id])

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({"article":dataArticle})
    try {
      const editArticle = await updateArticleFetch(data, id);
      if(editArticle) {
        toastSuccess("L'article a été mis à jour !");
        navigate('/');
      }
    } catch(error) {
      toastError("L'article n'a pas pu être mis à jour.");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={dataArticle.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="content">Contenu :</label>
        <textarea
          id="content"
          name="content"
          value={dataArticle.content}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Catégorie :</label>
      <select id="category" name="category" value={dataArticle.category} onChange={handleChange}>
        <option value="news">News</option>
        <option value="maison_de_quartier">Maison de quartier</option>
        <option value="programme">Programme</option>
        <option value="a_l_affiche">A l'affiche</option>
        <option value="activites_enfants">Activités enfants</option>
        <option value="activites_adultes">Activités adultes</option>
      </select>
      </div>
      <div>
        <label htmlFor="private">Privé :</label>
        <input
          type="checkbox"
          id="private"
          name="private"
          checked={dataArticle.private}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};