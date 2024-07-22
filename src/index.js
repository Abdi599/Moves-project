// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { AuthProvider, MovieProvider } from './context';
// import SignUp from './Sign-up'; // Correct import
// import Login from './Login';
// import Search from './Search';
// import SingleMovie from './SingleMovie'; // Ensure SingleMovie is imported

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: 'signup',
//         element: <SignUp />, // Correct usage of SignUp component
//       },
//       {
//         path: 'login',
//         element: <Login />,
//       },
//       {
//         path: 'search',
//         element: <Search />,
//       },
//       {
//         path: 'movie/:imdbID',
//         element: <SingleMovie />,
//       },
//       // Add more routes if needed
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <MovieProvider>
//         <RouterProvider router={router} />
//       </MovieProvider>
//     </AuthProvider>
//   </React.StrictMode>
// );





////////


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider, MovieProvider } from './context';
import SignUp from './Sign-up';
import Login from './Login';
import Search from './Search';
import SingleMovie from './SingleMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'movie/:imdbID',
        element: <SingleMovie />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </AuthProvider>
  </React.StrictMode>
);


<ToastContainer />



