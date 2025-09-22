import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import ContactCard from '../components/ContactCard.jsx';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAgenda, getAllAgendas, createNewAgenda } from '../services/agendaService.js';
import { SLUG } from '../utils/constants.js';
import { actionTypes } from '../store.js';

const Contact = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const initApp = async () => {
      const { agendas } = await getAllAgendas();
      const agendaExists = agendas.some((agenda) => agenda.slug === SLUG);
      if (!agendaExists) {
        await createNewAgenda(SLUG);
      }
      const contacts = await getAgenda(SLUG);
      dispatch({ type: actionTypes.getAllContacts, payload: contacts });
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
          {store.contacts.length > 0 &&
            store.contacts.map((contact) => {
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
