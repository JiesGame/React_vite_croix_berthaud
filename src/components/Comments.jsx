import { useState } from 'react';
import { createCommentFetch } from "../services/axiosComment";
import PropTypes from "prop-types";

export const Comments = (props) => {
  const [comment, setComment] = useState('');
  const articleID = props.articleID

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({"comment": {"content":comment}})
    createCommentFetch(articleID, data);
    setComment('');
    window.location.reload();
  };
  
  return (
    <div className='mb-10'>
      <form className='flex justify-between rounded-lg shadow-lg' onSubmit={handleSubmit}>
        <textarea className='border-[1px] primary w-full' value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Votre commentaire ici...'>
        </textarea>
        <button type="submit" className='primary-bg text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-cyan-300 button w-fit'>
          Envoyer
        </button>
      </form>
    </div>
  )
}

Comments.propTypes = {
  articleID: PropTypes.number
};