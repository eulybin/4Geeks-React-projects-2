import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Single } from './pages/Single';
import { Demo } from './pages/Demo';
import Form from './pages/Form';

export const router = createBrowserRouter(
  createRoutesFromElements(
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.

    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

    <Route path='/' element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path='/' element={<Home />} />
      <Route path='/single/:theId' element={<Single />} />
      <Route path='/form' element={<Form />} />
      {/* <Route path='/demo' element={<Demo />} /> */}
    </Route>
  )
);
