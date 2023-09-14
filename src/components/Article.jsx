import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Article = (props) => {
  const title = props.title;
  const content = props.content;
  const articleID = props.id;
  const isLinkVisible = props.isLinkVisible;
  const created_at = props.created_at;
  
  return (
    <div className='text-center'>
      <div className="mx-[20%]">
        <div className="border-2 rounded-lg shadow-lg w-full h-fit my-10">
          <div className="primary-bg rounded-t py-3">
            <p className="text-white ml-[1.5%]">Mis en ligne le {created_at}</p>
          </div>
        <div>
        <h1 className="text-center font-semibold text-3xl py-4">
          {isLinkVisible ?
            <p>
              <Link to={`article/${articleID}`}>
                {title}
              </Link>
            </p> 
            : 
            <p>{title}</p>
          }
        </h1>
        </div>
          <hr className="light-gray-border border-[1px] mx-[3%]"/>
        <div>
          <p className="py-8 primary text-center text-xl font-medium">
            {content}
          </p>
        </div>
        <div className="flex justify-between primary-bg text-white rounded-b py-3">
          <div className="ml-[1.5%]">ETOILES</div>
            <a href="#" className="hover:underline mr-[1.5%]">
              Laisser un commentaire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Article.propTypes= {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  isLinkVisible : PropTypes.bool,
  created_at : PropTypes.string
}