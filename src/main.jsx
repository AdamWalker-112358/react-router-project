import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Root, {loader as rootLoader, action as rootAction} from './routes/root';
import ErrorPage from './error-page'
import Index from './routes/index';
import Contact, { loader as contactLoader, favoriteAction as contactAction } from './routes/contact';
import { action as deleteAction } from './routes/destroy';
import EditContact , {action as editAction} from './routes/edit';
import './index.css'


const routes = createRoutesFromElements(
  <Route path='/' element={<Root />} errorElement={<ErrorPage />} loader={rootLoader} action={rootAction}>
    <Route errorElement={<ErrorPage />}>
      <Route index element={<Index />} />
      <Route path="contacts">
        <Route index element={<Index/>}></Route>
        <Route path=':contactId' element={<Contact />} loader={contactLoader} action={contactAction}></Route>
        <Route path=':contactId/edit' element={<EditContact />} loader={contactLoader} action={editAction}></Route>
        <Route path=':contactId/destroy'  action={deleteAction}></Route>
      </Route>
    </Route>
  </Route>
)

const router = createBrowserRouter(routes)      
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)




