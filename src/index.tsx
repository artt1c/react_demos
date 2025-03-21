import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContactsPage from "./pages/contscts/ContactsPage";
import AboutPage from "./pages/about/AboutPage";
import ErrorLayout from "./layouts/ErrorLayout";
import SingleContactPage from "./pages/contact/SingleContactPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorLayout/>,
    children: [
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'contacts/:id',
        element: <SingleContactPage/>
      },
      {
        element: <AboutPage />,
        index: true
      }
    ]
  },
]);
root.render(
  <RouterProvider router={router}/>
);

