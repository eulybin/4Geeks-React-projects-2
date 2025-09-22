import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from 'react-router-dom';
import { deleteContact } from '../services/contactsService';
import { SLUG } from '../utils/constants';
import { actionTypes } from '../store';

const ContactCard = ({ name, address, phone, email, id }) => {
  const { dispatch } = useGlobalReducer();

  const handleDeleteContact = async (id) => {
    await deleteContact(SLUG, id);
    dispatch({ type: actionTypes.deleteContact, payload: id });
  };

  const formattedPhoneNumber = `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, phone.length)}`;

  return (
    <div className='container border border-black mb-4'>
      <div className='row'>
        <div className='col-lg-3 profile-img p-4 text-center'>
          <img src='/src/assets/contact-img.png' alt='default contact profile img' />
        </div>
        <div className='col-lg-6 d-flex align-items-center'>
          <div>
            <h2 className='mb-4'>{name}</h2>
            <p>
              <i className='fa-solid fa-location-dot' style={{ color: '#565656' }}></i>
              &nbsp;
              {address}
            </p>
            <p>
              <i className='fa-solid fa-phone' style={{ color: '#565656' }}></i>
              &nbsp;
              {formattedPhoneNumber}
            </p>
            <p>
              <i className='fa-solid fa-envelope' style={{ color: '#565656' }}></i>
              &nbsp;
              {email}
            </p>
          </div>
        </div>
        <div className='col-lg-3 d-flex mt-5 justify-content-center gap-5'>
          <div>
            <Link to='add-contact' state={{ id }} className='edit-link'>
              <i className='fa-solid fa-pen-to-square fs-4'></i>
            </Link>
          </div>
          <div className='delete-icon' onClick={() => handleDeleteContact(id)}>
            <i className='fa-solid fa-trash fs-4'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
