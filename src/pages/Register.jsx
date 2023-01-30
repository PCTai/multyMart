import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config';
import { db } from '../firebase.config';
import { storage } from '../firebase.config';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              // update user profile
              await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL
              })

              // store user date in firestore database
              await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: username,
                email: email,
                photoURL: downloadURL,

              })
            }
          )
        }
      )


      setLoading(false);
      toast.success("Account created")
      navigate('/login')
    } catch (error) {
      setLoading(false);
      toast.error("some thing went wrong")
    }
  }
  return (
    <Helmet title={"Register"}>
      <div className="login container m-auto pt-32 pb-10">
        {loading ? (<h3 className='text-center'>Loading .....</h3>) :
          <form action="" className='w-96 p-6 m-auto bg-gray-900 rounded-lg text-white' onSubmit={signup}>
            <h1 className='font-semibold text-center'>Register</h1>
            <div className="mt-4">
              <label htmlFor="name">Name</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" name='name' placeholder='Enter your name' className='text-gray-900 p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded w-full' />
            </div>
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
            <div className="mt-4">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button type='submit' className='mt-6 p-2 w-full bg-white text-gray-900 rounded-lg font-medium'>Sign up</button>
            <h3 className="mt-2 text-center text-sm">Already an account? <Link to={"/login"}>Login now</Link></h3>
          </form>
        }
      </div>
    </Helmet>
  )
}

export default Register
