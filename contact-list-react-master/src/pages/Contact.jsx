import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { useEffect, useState } from 'react';
import ContactCard from '../components/ContactCard.jsx';
import { Link } from 'react-router-dom';

const mockData = [
  {
    name: 'Jose Luis Coronado',
    address: 'Calle Soles, 91',
    phone: '696585326',
    email: 'joseluiscoronado@gmail.com',
    id: 1,
  },
  {
    name: 'Angel Jaramillo Castro',
    address: 'Avenida los Monteros, 142',
    phone: '699321645',
    email: 'angeljaram@yahoo.com',
    id: 2,
  },
  {
    name: 'Oscar Camu',
    address: 'Calle el Rosario, 319',
    phone: '612147754',
    email: 'oscarchess@outlook.com',
    id: 3,
  },
];

const Contact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [data, setData] = useState(mockData);

  console.log(data);

  return (
    <div className='container mt-5'>
      <div className='row justify-content-end'>
        <div className='col-auto'>
          <button className='btn btn-success btn-lg mb-2'>
            <Link className='text-white' to='/add-contact'>
              Add new contact
            </Link>
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          {data &&
            data.map((contact) => {
              return (
                <ContactCard
                  key={contact.id}
                  name={contact.name}
                  address={contact.address}
                  phone={contact.phone}
                  email={contact.email}
                  id={contact.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Contact;
