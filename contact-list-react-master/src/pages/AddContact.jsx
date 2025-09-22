import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { createNewContact, updateContact } from '../services/contactsService';
import { SLUG } from '../utils/constants';

const defaultContactState = { name: '', email: '', phone: '', address: '' };

const AddContact = () => {
  const [contact, setContact] = useState(defaultContactState);
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state?.id;
  const editingContact = id ? true : false;

  const handleAddNewContact = async () => {
    if (editingContact) {
      await updateContact(SLUG, id, contact);
    } else {
      await createNewContact(SLUG, contact);
    }
    setContact(defaultContactState);
    navigate('/');
  };

  const handleAddOnEnter = (e) => {
    if (e.key === 'Enter') {
      handleAddNewContact();
    }
  };

  console.log(contact);

  return (
    <div className='container p-3 border border-2 mt-4'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='display-6 fw-bold'>Add new contact</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <form>
            <div className='mb-3'>
              <label className='fs-5 mb-1 form-label' htmlFor='full-name'>
                Full Name
              </label>
              <input
                onChange={(e) => setContact((prevState) => ({ ...prevState, name: e.target.value }))}
                value={contact.name}
                placeholder='Enter Full Name'
                type='text'
                className='form-control'
                id='full-name'
              ></input>
            </div>
            <div className='mb-3'>
              <label className='fs-5 mb-1 form-label' htmlFor='email'>
                Email
              </label>
              <input
                onChange={(e) => setContact((prevState) => ({ ...prevState, email: e.target.value }))}
                value={contact.email}
                placeholder='Enter Email Address'
                type='email'
                className='form-control'
                id='email'
              ></input>
            </div>
            <div className='mb-3'>
              <label className='fs-5 mb-1 form-label' htmlFor='phone-number'>
                Phone Number
              </label>
              <input
                onChange={(e) => setContact((prevState) => ({ ...prevState, phone: e.target.value }))}
                value={contact.phone}
                placeholder='Enter Phone Number'
                type='text'
                className='form-control'
                id='phone-number'
              ></input>
            </div>
            <div className='mb-3'>
              <label className='fs-5 mb-1 form-label' htmlFor='home-address'>
                Home Address
              </label>
              <input
                onKeyDown={handleAddOnEnter}
                onChange={(e) => setContact((prevState) => ({ ...prevState, address: e.target.value }))}
                value={contact.address}
                placeholder='Enter Home Address'
                type='text'
                className='form-control'
                id='home-address'
              ></input>
            </div>
          </form>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button onClick={handleAddNewContact} type='button' className='btn btn-primary w-100'>
            Send
          </button>
        </div>
        <Link to='/'>or get back to contacts list</Link>
      </div>
    </div>
  );
};

export default AddContact;
