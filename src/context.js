
// import React, { createContext, useContext, useEffect, useState } from 'react';
// const API_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
// // import { auth } from './Firebase';
//  const MovieContext = createContext();

// //  export function AuthProvider({children}){

 

// const Movieprovider = ({ children }) => {
//     const [currentUser ,setCurrentUser]=useState(null)
//     const [userLoggedIn, setUserLoggedIn]=useState(false)
//     const [isLoadding , setIsLoading]=useState(true);
//     const [movie,setMovie]=useState([]);
//     const [isError,setIsError] = useState({show:"false", msg: ""});
//     const  [query,setQuery]=useState("titanic");
//     const getMovies=async(url)  =>{
//         try{
//             const res= await fetch(url);
//             const data =await res.json();
//             console.log(data);
//             if(data.Response==="True"){
//                 setIsLoading (false);
//                 setMovie(data.Search)
//             }
//             else{
//                 setIsLoading({
//                     show:false,
//                     msg:"",

//                 })

//             }

//         }catch(Error){
//             console.log(Error)
//         }

//     };
//     useEffect(() => {
//       let timerOut=  setTimeout(()=>{
       
//             getMovies(`${API_URL}&s=${query}`);

//         },300)
      
//         return()=>clearTimeout(timerOut)
       
//     },[query]);
// //   const [movies, setMovies] = useState([]);

//   return (
//     <MovieContext.Provider value={{isLoadding,isError,movie,setQuery}}>
//       {children}
//     </MovieContext.Provider>
//     );

// };
// const useGlobalContext=()=>{
//     return useContext(MovieContext)
// }


// export{MovieContext,Movieprovider , useGlobalContext}



// src/context.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, onAuthStateChanged as firebaseOnAuthStateChanged } from './Firebase'; // Ensure 'onAuthStateChanged' is correctly imported from Firebase

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MovieContext = createContext();
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = firebaseOnAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                setUserLoggedIn(true);
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
            setIsLoading(false);
        });

        return () => unsubscribe(); // Clean up subscription on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, userLoggedIn, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

const MovieProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: "" });
    const [query, setQuery] = useState("titanic");

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
            } else {
                setIsError({
                    show: true,
                    msg: data.Error,
                });
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsError({
                show: true,
                msg: "An error occurred while fetching data.",
            });
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let timeout = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 300);

        return () => clearTimeout(timeout); // Clean up timeout on unmount
    }, [query]);

    return (
        <MovieContext.Provider value={{ isLoading, isError, movie, setQuery }}>
            {children}
        </MovieContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(MovieContext);
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { MovieProvider, AuthProvider, useGlobalContext, useAuth };













