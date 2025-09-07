export const initialStore = {
  contacts: [
    {
      name: 'Robert James',
      phone: '9482132546',
      email: 'robertjames@gmail.com',
      address: '560 Lincoln Place, Brooklyn, New York',
      id: 1,
    },
  ],
};

export const storeReducer = (state, action = {}) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((c) => (c.id === id ? { ...c, name, address, phone, email } : c)),
      };
    default:
      throw Error('Unknown action.');
  }
};
