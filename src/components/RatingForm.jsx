import PropTypes from "prop-types";
import { createRatingFetch } from "../services/axiosRating";

export const RatingForm = (props) => {
  const { articleID, rating } = props;

  const handleRatingClick = (e) => {
    const data = JSON.stringify({"rating":{"score":e.target.value}});
    createRatingFetch(articleID, data);
  };

  return (
    <div className="ml-[1.5%]">
      <div className="rate">
        <input
          type="radio"
          id={`star5-${articleID}`}
          name={`rate-${articleID}`}
          value="5"
          onClick={handleRatingClick}
          defaultChecked={rating === 5}
        />
        <label htmlFor={`star5-${articleID}`} title="5 stars" />
        <input
          type="radio"
          id={`star4-${articleID}`}
          name={`rate-${articleID}`}
          value="4"
          onClick={handleRatingClick}
          defaultChecked={rating === 4}
        />
        <label htmlFor={`star4-${articleID}`} title="4 stars" />
        <input
          type="radio"
          id={`star3-${articleID}`}
          name={`rate-${articleID}`}
          value="3"
          onClick={handleRatingClick}
          defaultChecked={rating === 3}
        />
        <label htmlFor={`star3-${articleID}`} title="3 stars" />
        <input
          type="radio"
          id={`star2-${articleID}`}
          name={`rate-${articleID}`}
          value="2"
          onClick={handleRatingClick}
          defaultChecked={rating === 2}
        />
        <label htmlFor={`star2-${articleID}`} title="2 stars" />
        <input
          type="radio"
          id={`star1-${articleID}`}
          name={`rate-${articleID}`}
          value="1"
          onClick={handleRatingClick}
          defaultChecked={rating === 1}
        />
        <label htmlFor={`star1-${articleID}`} title="1 star" />
      </div>
    </div>
  );
};

RatingForm.propTypes = {
  articleID: PropTypes.number,
  rating: PropTypes.number,
};