/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../store/atoms";
import { DeleteArticleButton } from "./DeleteArticleButton";
import { format } from 'date-fns';
import frLocale from 'date-fns/locale/fr';
import { useState, useRef } from "react";
import Cookies from "js-cookie";
import { toastInfo } from '../services/toast';
import { CommentForm } from "./CommentForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { ListComments } from "./ListComments";
import { RatingForm } from "./RatingForm";

export const Article = (props) => {
  const [userInfo] = useAtom(userAtom);
  const title = props.title;
  const content = props.content;
  const articleID = props.id;
  const isLinkVisible = props.isLinkVisible;
  const formattedDate = format(new Date(props.created_at), "dd MMMM yyyy", { locale: frLocale });
  const [isCommentDropdownVisible, setIsCommentDropdownVisible] = useState('');
  const commentFormRef = useRef(null);
  const handleCommentClick = (e) => {
    e.preventDefault();
    const token = Cookies.get('token');
    if (token) {
      setIsCommentDropdownVisible(!isCommentDropdownVisible);
      commentFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      toastInfo("Vous devez être connecté pour effectuer cette action.");
    }
  };
  const [rating, setRating] = useState('');
  const handleRatingClick = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className="text-center">
      <div className="md:mx-[20%] mx-[5%]">
        <div className="border-2 rounded-lg shadow-lg w-full h-fit my-10">
          <div className="primary-bg rounded-t py-3">
            <p className="text-white ml-[1.5%] font-normal">
              Mis en ligne le {formattedDate}
            </p>
          </div>
          <div>
            <h1 className="text-center font-semibold text-3xl py-4">
              {isLinkVisible ? 
                <p>
                  <Link to={`article/${articleID}`} className="dark font-medium">
                    {title}
                  </Link>
                </p>
              : 
                <p>
                  {title}
                </p>
              }
            </h1>
          </div>
          <hr className="light-gray-border border-[1px] mx-[3%]" />
          <div>
            <p className="py-8 dark text-center text-xl font-normal">
              {content}
            </p>
          </div>
          {userInfo?.is_admin && (
            <div className="flex justify-center gap-[10%] my-4">
              <Link to={`/admin_edit_article/${articleID}`} className="primary-bg text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-cyan-300 button">
                Editer
              </Link>
              <DeleteArticleButton articleID={articleID} />
            </div>
          )}
          <div className="flex md:justify-between md:flex-row md:items-center primary-bg text-white rounded-b py-1 flex-col items-center">
            <RatingForm articleID={articleID} />
            <a href="#" className="mr-[1.5%] font-normal flex items-center mb-2" onClick={handleCommentClick}>
            <FontAwesomeIcon icon={faCommentDots} />
            <p className="hover:underline ml-2">Laisser un commentaire</p>
            </a>
          </div>
          <ListComments articleID={articleID} handleRatingClick={handleRatingClick}/>
        </div >
        <div ref={commentFormRef}>
          {isCommentDropdownVisible && <CommentForm articleID={articleID}/>}
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  isLinkVisible: PropTypes.bool,
  created_at: PropTypes.string,
  initialRating: PropTypes.number
};
