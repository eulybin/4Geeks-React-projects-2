export const actionTypes = {
  getAllContacts: 'GET_ALL_CONTACTS',
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
