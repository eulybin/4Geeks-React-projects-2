import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const Single = (props) => {
  const { store } = useGlobalReducer();
  const { theId } = useParams();
  const singleTodo = store.todos.find((todo) => todo.id === parseInt(theId));

  return (
    <div className='container text-center'>
      <h1 className='display-4'>Todo: {singleTodo?.title}</h1>
      <hr className='my-4' />
      <Link to='/'>
        <span className='btn btn-primary btn-lg' href='#' role='button'>
          Back home
        </span>
      </Link>
    </div>
  );
};

//maybe delete later
Single.propTypes = {
  match: PropTypes.object,
};
