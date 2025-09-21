export const actionTypes = {
  getAllContacts: 'GET_ALL_CONTACTS',
  addContact: 'ADD_CONTACT',
};

export const initialStore = {
  contacts: [],
};

export const storeReducer = (store, action = {}) => {
  switch (action.type) {
    case actionTypes.getAllContacts:
      return {
        ...store,
        contacts: action.payload,
      };
    default:
      return store;
  }
};
