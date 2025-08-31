import { Link, useParams } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

const ContactCard = () => {
  const { store } = useGlobalReducer();
  const { theId } = useParams();
  //   const singleTodo = store.todos.find((todo) => todo.id === parseInt(theId));

  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-3 profile-img'>
          <img src='/src/assets/contact-img.png' alt='default contact profile img' />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
