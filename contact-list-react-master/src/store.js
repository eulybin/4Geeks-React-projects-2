export const initialStore = {
  message: null,
  contacts: [
    {
      id: 1,
      name: 'Mark Roberts',
      address: 'Calle Soledad 33',
      phone: '5802976645',
      email: 'markroberts@gmail.com',
    },
    {
      id: 2,
      name: 'Jessica Windham',
      address: 'Berkshire Street, 55',
      phone: '7447202255',
      email: 'jesswind@outlook.co.uk',
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
