import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';

function App() {
  const BrowserRouter = createHashRouter([
    { path: 'Ahmed-s-Portfolio', element: <Layout /> },
      { path: '', element: <Layout /> }
  ]);

  return (
    <RouterProvider router={BrowserRouter}/>
  );
}

export default App;
