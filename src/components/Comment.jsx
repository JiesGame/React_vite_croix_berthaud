import PropTypes from "prop-types";
import { format } from 'date-fns';
import frLocale from 'date-fns/locale/fr';

export const Comment = (props) => {
  const content = props.content;
  const formattedDate = format(new Date(props.created_at), "dd MMMM yyyy", { locale: frLocale });
  const user_id = props.user_id;

  return (
    <>
      <div className='flex'>Ecrit par {user_id}, le {formattedDate}</div>
      <div className='flex flex-col items-start my-4'>
        {content}
      </div>
    </>
  )
}

Comment.propTypes = {
  content: PropTypes.string,
  created_at: PropTypes.string,
  user_id: PropTypes.number
};