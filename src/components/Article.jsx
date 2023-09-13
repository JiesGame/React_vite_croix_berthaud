import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Article = (props) => {
  const title = props.title;
  const content = props.content;
  const articleID = props.id;

  return (
    <div key={articleID}>
      <p><Link to={`article/${articleID}`}>{title}</Link></p>
      <p className='my-2'>content: {content}</p>
    </div>
  )
}

Article.propTypes= {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
}