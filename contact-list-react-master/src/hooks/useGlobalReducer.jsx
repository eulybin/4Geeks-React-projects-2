import { useContext, useReducer, createContext } from 'react';
import { initialStore, storeReducer } from '../store';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  return <StoreContext.Provider value={{ store, dispatch }}>{children}</StoreContext.Provider>;
}

//custom hook
const useGlobalReducer = () => {
  const { store, dispatch } = useContext(StoreContext);
  return { store, dispatch };
};

export default useGlobalReducer;
