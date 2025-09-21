import useGlobalReducer from '../hooks/useGlobalReducer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createNewContact } from '../services/contactsService';
import { SLUG } from '../utils/constants';

const defaultContactState = { name: '', email: '', phone: '', address: '' };

const AddContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [contact, setContact] = useState(defaultContactState);

  const handleAddNewContact = async () => {
    await createNewContact(SLUG, contact);
    setContact(defaultContactState);
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
