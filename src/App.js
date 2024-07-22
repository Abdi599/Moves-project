
// import React from 'react'
// import Home from './Home';
// import {Router, Routes,Route} from "react-router-dom";
// import SingleMovie from './SingleMovie';
// import { AuthProvider, MovieProvider } from './context';
// import Error from './Error';
// import Movies from './Movies';
// import "./App.css"

// const App = () => { 
//   return (
//     <>
  
//     <Routes>
//       <Route  path='/' element={<Home/>}/>
//       <Route path='movie/:id'element={<SingleMovie/>}/>
//       <Route path='*' element={<Error/>}/>
//     </Routes>

//     </>
//   )
// }

// export default App





////////////////////////////////////////




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import SingleMovie from './SingleMovie';
// import Error from './Error';
// import Movies from './Movies';
// import "./App.css";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="movie/:id" element={<SingleMovie />} />
//       <Route path="*" element={<Error />} />
//     </Routes>
//   );
// };

// export default App;
////////////////////////////////////////////////////
// src/App.js







// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import Movies from './Movies';
import SignUp from './Sign-up'; // Ensure this matches the actual file name
import Login from './Login'; 
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
