import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = (userCredential).user;
      console.log(user);
      toast.success("Successfully logged in")
      setLoading(false);
      navigate('/checkout');
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  }
  return (
    <Helmet title={"Login"}>
      <div className="login container m-auto pt-32 pb-10">
        {
          loading ? (<h3 className='text-center'>Loading .....</h3>) :
            <form action="" className='w-96 p-6 m-auto bg-gray-900 rounded-lg text-white' onSubmit={signIn}>
              <h1 className='font-semibold text-center'>Login</h1>
              <div className="mt-4">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email" name='email' placeholder='Enter your email' className='text-gray-900 p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded w-full' />
              </div>
              <div className="mt-4">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" name='password' placeholder='Enter your password ' className='text-gray-900 w-full p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded' />
              </div>
              <button type='submit' className='mt-6 p-2 w-full bg-white text-gray-900 rounded-lg font-medium'>Login</button>

              <h3 className="mt-2 text-center text-sm">Don't have account? <Link to={"/register"}>Create an acount</Link></h3>
            </form>
        }
      </div>
    </Helmet>
  )
}

export default Login
