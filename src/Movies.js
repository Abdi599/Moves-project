// import React from 'react'
// import { useGlobalContext } from './context'
// import { NavLink } from 'react-router-dom';
// import Home from './Home';
// import "./App.css"


// const Movies = () => {
//     const {movie , isLoadiing}=useGlobalContext();
//     if(isLoadiing){
//         return (
//             <div className='Movie-section'>
//                 <div className='loading'>loading...</div>
//             </div>
//         );
//     }
//   return (

   
//     <section className='movie-page'>
//         <div className='container grid grid-4-col'>{movie.map((curMovie) =>{
//             const {imdbID,Title,Poster}= curMovie;
//             const MovieName=Title.substring(0,15)
//           return  <NavLink to={`movie/${imdbID}`} key={imdbID}>
//             <div className='card'>
//                 <div className='card-info'>
//                     <h2>{MovieName .length >= 15? `${MovieName}...` :MovieName}</h2>
//                     <img src={Poster}  alt={imdbID}/>
//                 </div>
//             </div>
//           </NavLink>;
//         })}
//         </div>
//          </section>
    
//   );
// };

// export default Movies



// // import React from 'react'
// // import { useGlobalContext } from './context'
// // import { NavLink } from 'react-router-dom';
// // import "./App.css"

// // const Movies = () => {
// //     const { movie, isLoading } = useGlobalContext();

// //     if (isLoading) {
// //         return (
// //             <div className='Movie-section'>
// //                 <div className='loading'>loading...</div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <section className='movie-page'>
// //             <div className='container grid grid-4-col'>
// //                 {movie.map((curMovie) => {
// //                     const { imdbID, Title, Poster } = curMovie;
// //                     const MovieName = Title.length > 15 ? `${Title.substring(0, 15)}...` : Title;
// //                     return (
// //                         <NavLink to={`movie/${imdbID}`} key={imdbID}>
// //                             <div className='card'>
// //                                 <div className='card-info'>
// //                                     <h2>{MovieName}</h2>
// //                                     <img src={Poster} alt={imdbID} />
// //                                 </div>
// //                             </div>
// //                         </NavLink>
// //                     );
// //                 })}
// //             </div>
// //         </section>
// //     );
// // };

// // export default Movies;



// // import React from 'react';
// // import { useGlobalContext } from './context';
// // import { NavLink } from 'react-router-dom';
// // import "./App.css";

// // const Movies = () => {
// //     const { movie, isLoading } = useGlobalContext(); // Ensure isLoading is correctly named

// //     if (isLoading) {
// //         return (
// //             <div className='Movie-section'>
// //                 <div className='loading'>loading...</div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <section className='movie-page'>
// //             <div className='container grid grid-4-col'>
// //                 {movie.map((curMovie) => {
// //                     const { imdbID, Title, Poster } = curMovie;
// //                     const MovieName = Title.length > 15 ? `${Title.substring(0, 15)}...` : Title;
// //                     return (
// //                         <NavLink to={`movie/${imdbID}`} key={imdbID}>
// //                             <div className='card'>
// //                                 <div className='card-info'>
// //                                     <h2>{MovieName}</h2>
// //                                     <img src={Poster} alt={imdbID} />
// //                                 </div>
// //                             </div>
// //                         </NavLink>
// //                     );
// //                 })}
// //             </div>
// //         </section>
// //     );
// // };

// // export default Movies;





















import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';
import "./App.css";

const Movies = () => {
    const { movie, isLoading } = useGlobalContext(); // Ensure isLoading is correctly named

    if (isLoading) {
        return (
            <div className='Movie-section'>
                <div className='loading'>loading...</div>
            </div>
        );
    }

    return (
        <section className='movie-page'>
            <div className='container grid grid-4-col'>
                {movie.map((curMovie) => {
                    const { imdbID, Title, Poster } = curMovie;
                    const MovieName = Title.length > 15 ? `${Title.substring(0, 15)}...` : Title;
                    return (
                        <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className='card'>
                                <div className='card-info'>
                                    <h2>{MovieName}</h2>
                                    <img src={Poster} alt={imdbID} />
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </section>
    );
};

export default Movies;
