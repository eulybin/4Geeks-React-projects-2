import { BASE_URL } from '../utils/constants';

// create an agenda (POST)
export const createNewAgenda = async (agendaName) => {
  const newAgendaObj = {
    slug: agendaName,
    contacts: [],
  };

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(newAgendaObj),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/agendas/${agendaName}`, requestOptions);
    if (!response.ok) {
      throw new Error('Could not create the new agenda...');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};

//get the agenda (GET)
export const getAgenda = async (agendaName) => {
  try {
    const response = await fetch(`${BASE_URL}/agendas/${agendaName}`);
    if (!response.ok) {
      throw new Error(`Could not get the agenda: ${agendaName}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};
