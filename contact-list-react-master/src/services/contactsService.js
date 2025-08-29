import { BASE_URL } from '../utils/constants';

//create a new contact (POST)
export const createNewContact = async (agendaName, newContactObj) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(newContactObj),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/agendas/${agendaName}/contacts`, requestOptions);
    if (!response.ok) {
      throw new Error('Could not create the new contact...');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};

//get the contact (GET)
export const getContacts = async (agendaName) => {
  try {
    const response = await fetch(`${BASE_URL}/agendas/${agendaName}/contacts`);
    if (!response.ok) {
      throw new Error(`Could not get the contact for: ${agendaName}`);
    }
    const data = await response.json();
    return data.contacts;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};
