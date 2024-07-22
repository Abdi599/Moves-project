// // src/Sign-up.js
// import React, { useState } from 'react';
// import { auth, createUserWithEmailAndPassword } from './Firebase';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     setError(''); // Reset error state
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       console.log('Sign Up successful');
//       // Handle successful sign up (e.g., redirect to a different page)
//     } catch (error) {
//       console.error('Error signing up:', error);
//       setError(error.message); // Set error message in state
//     }
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSignUp}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// };


////
import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError(''); // Reset error state
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Sign Up successful");
      navigate('/'); // Redirect to home page after successful sign up
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message); // Set error message in state
      toast.error('Error signing up');
    } finally {
      setLoading(false);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='signIn-container'>
      {/* <h1>Sign Up</h1> */}
      <form className='frm-container' onSubmit={handleSignUp}>
        <div className='input-sign'>
          <label>Email</label>
          <input
            type='email'
            placeholder='username'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input-sign'>
          <label>Password</label>
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='btn-sign'>
          <button type='submit' className='btn'>
            <span>
              {loading ? 'Loading...' : 'Sign Up'}
            </span>
          </button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
