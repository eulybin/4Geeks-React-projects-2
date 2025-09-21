import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { useEffect, useState } from 'react';
import ContactCard from '../components/ContactCard.jsx';
import { Link } from 'react-router-dom';
import { getAgenda, getAllAgendas, createNewAgenda } from '../services/agendaService.js';
import { SLUG } from '../utils/constants.js';

const Contact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [data, setData] = useState(store.contacts);

  useEffect(() => {
    const initApp = async () => {
      const { agendas } = await getAllAgendas();
      const agendaExists = agendas.some((agenda) => agenda.slug === SLUG);
      if (!agendaExists) {
        await createNewAgenda(SLUG);
      }
    };
    initApp();
  }, []);

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
