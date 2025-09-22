import { BASE_URL } from '../utils/constants';

//create a new contact (POST)
export const createNewContact = async (slug, newContactObj) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(newContactObj),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/agendas/${slug}/contacts`, requestOptions);
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
export const getContacts = async (slug) => {
  try {
    const response = await fetch(`${BASE_URL}/agendas/${slug}/contacts`);
    if (!response.ok) {
      throw new Error(`Could not get the contact for: ${slug}`);
    }
    const data = await response.json();
    return data.contacts;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};

//delete existing contact (DELETE)
export const deleteContact = async (slug, contactID) => {
  try {
    const response = await fetch(`${BASE_URL}/agendas/${slug}/contacts/${contactID}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error(`Could not delete the contact with id: ${contactID}`);
    }
    if (response.status === 204) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};

//update an existing contact (PUT)
export const updateContact = async (slug, contactID, newContactObj) => {
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(newContactObj),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(`${BASE_URL}/agendas/${slug}/contacts/${contactID}`, requestOptions);
    if (!response.ok) {
      throw new Error(`Could not update the contact with id: ${contactID}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Something went wrong: ' + error);
  }
};
