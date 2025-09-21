export const actionTypes = {
  getAllContacts: 'GET_ALL_CONTACTS',
  deleteContact: 'DELETE_CONTACT',
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

    case actionTypes.deleteContact:
      const updatedContacts = store.contacts.filter((c) => c.id !== action.payload);
      return {
        ...store,
        contacts: updatedContacts,
      };
    default:
      return store;
  }
};
