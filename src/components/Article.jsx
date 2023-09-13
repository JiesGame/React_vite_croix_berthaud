import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Article = (props) => {
  const title = props.title;
  const content = props.content;
  const articleID = props.id;
  const isLinkVisible = props.isLinkVisible;


  return (
    <div className='text-center' key={articleID}>
      {isLinkVisible ?
        <p><Link to={`article/${articleID}`}>{title}</Link></p> :
        <>
          <h1 >New n°{articleID}</h1>
          <p>{title}</p>
        </>
      }
      <p className='my-2'>{content}</p>
    </div>
  )
}

Article.propTypes= {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  isLinkVisible : PropTypes.bool
}