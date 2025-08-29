export const initialStore = {
  message: null,
  todos: [
    {
      id: 1,
      title: 'Go to the gym',
      background: null,
    },
    {
      id: 2,
      title: 'Do my homework',
      background: null,
    },
  ],
};

export const storeReducer = (state, action = {}) => {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload;

      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo)),
      };
    default:
      throw Error('Unknown action.');
  }
};
