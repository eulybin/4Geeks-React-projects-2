import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import AddContact from './pages/AddContact';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Contact />} />
      <Route path='/add-contact' element={<AddContact />} />
    </Route>
  )
);
