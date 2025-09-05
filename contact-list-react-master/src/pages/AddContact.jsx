import React from 'react';
import { Link } from 'react-router-dom';

const AddContact = () => {
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
              <input placeholder='Enter Full Name' type='text' className='form-control' id='full-name'></input>
            </div>
            <div className='mb-3'>
              <label className='fs-5 mb-1 form-label' htmlFor='email'>
                Email
              </label>
              <input placeholder='Enter Email Address' type='email' className='form-control' id='email'></input>
            </div>
            <div className='mb-3'>
              <label className='fs-5 mb-1 form-label' htmlFor='phone-number'>
                Phone Number
              </label>
              <input placeholder='Enter Phone Number' type='text' className='form-control' id='phone-number'></input>
            </div>
            <div className='mb-3'>
              <label className='fs-5 mb-1 form-label' htmlFor='home-address'>
                Home Address
              </label>
              <input placeholder='Enter Home Address' type='text' className='form-control' id='home-address'></input>
            </div>
          </form>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button type='button' className='btn btn-primary w-100'>
            Send
          </button>
        </div>
        <Link to='/'>or get back to contacts list</Link>
      </div>
    </div>
  );
};

export default AddContact;
