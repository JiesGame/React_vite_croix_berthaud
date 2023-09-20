import { useState, useEffect } from "react";
import { commentsFetch } from "../services/axiosComment";
import { Comment } from "./Comment";
import PropTypes from "prop-types";

export const ListComments = (props) => {
  const [dataComments, setDataComments] = useState([]);
  const articleID = props.articleID

  useEffect(() => {
    commentsFetch(articleID, setDataComments);
  }, [articleID])

  return (
    <div className="font-semibold">
      {dataComments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          content={comment.content}
          user_id={comment.user_id}
          created_at={comment.created_at}
        />   
      ))}
    </div>
  )
}

ListComments.propTypes = {
  articleID: PropTypes.number
};