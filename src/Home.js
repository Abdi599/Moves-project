

////////////////////////


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Search from './Search';
// import Movies from './Movies';
// import './App.css';

// const Home = () => {
//   return (
//     <>
     
//       <Search />
//       <Movies />

//       <nav>
//         <ul>
//           <li>
//             <Link to="/signup">Sign Up</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Home;





////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Movies from './Movies';

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Search />
      <Movies />
    </>
  );
};

export default Home;









