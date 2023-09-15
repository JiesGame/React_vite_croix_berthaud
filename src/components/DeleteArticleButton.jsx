/* eslint-disable react/no-unescaped-entities */
import { useNavigate, useLocation } from 'react-router-dom';
import { toastInfo, toastError } from '../services/toast';
import { deleteArticleFetch } from '../services/axiosAdmin';
import PropTypes from 'prop-types';

export const DeleteArticleButton = (props) => {
  const articleID = props.articleID;
  const navigate = useNavigate();
  const location = useLocation();
  const deleteArticleButton = async () => {
    try {
      await deleteArticleFetch(articleID);
      location.pathname === '/' ? window.location.reload() : navigate('/');
      toastInfo("L'article a été supprimé.");
    } catch(error) {
      toastError ("L'article n'a pas pu être supprimé.");
    }
  }

  return (
    <button className="bg-red-500 hover:bg-red-600 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[15%]" onClick={deleteArticleButton}>Supprimer</button>
  )
};

DeleteArticleButton.propTypes= {
  articleID: PropTypes.number
}