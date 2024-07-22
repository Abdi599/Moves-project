import React from 'react'
import { useGlobalContext } from './context'
import { Form } from 'react-router-dom';


const Search = () => {
    const {query,setQuery,isError}=useGlobalContext();
 return (
    
   
    <section className='search-section'>
        <h2>Search Your Fovourite  Movie</h2>
        <Form action="#" onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type='text' placeholder="Search Here" value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
        </Form>
        <div className='card-error'>
            <p>{isError.show && isError.msg}</p>

        </div>
    </section>
    
 
  )
    
  
}

export default Search