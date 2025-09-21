import { BASE_URL } from '../utils/constants';

// create an agenda (POST)
export const createNewAgenda = async (slug) => {
  try {
    const response = await fetch(`${BASE_URL}/agendas/${slug}`, { method: 'POST' });
    if (!response.ok) {
      if (response.status >= 500) {
        return;
      }
      throw new Error(`Could not create the agenda ${slug}.`);
    }
    return await response.json();
  } catch (error) {
    console.error('Something went wrong...', error);
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
    return data.contacts;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};

// get ALL agendas (GET)
export const getAllAgendas = async () => {
  try {
    const response = await fetch(`${BASE_URL}/agendas`);
    if (!response.ok) {
      throw new Error(`Could not fetch the agendas!`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Something went wrong: ' + err);
  }
};
