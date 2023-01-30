import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../customhook/useAuth'
import { signOut } from 'firebase/auth';
import logo from '../../assets/images/eco-logo.png';
import user from '../../assets/images/user-icon.png';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';



const navLinks = [
  {
    id: 1,
    link: 'home',
    label: 'Home'
  },
  {
    id: 2,
    link: 'shop',
    label: 'Shop'
  },
  {
    id: 3,
    link: 'cart',
    label: 'Cart'
  }
]

export default function Header() {
  const [open , setOpen] = useState(false);
  const location = useLocation();
  const amount= useSelector(state => state.cart.cartItem).length;
  const {currentUser} = useAuth();
  const [openUserMenu, setOpenUserMenu] =useState(false);
  const navigate = useNavigate();
  const toggleMenu =() =>{
    setOpen(!open);
  }
  const toggleUserMenu =() =>{
    setOpenUserMenu(!openUserMenu);
  }

  const logout = async () =>{
    signOut(auth).then(() =>{
      toast.success("Loggout out");
      navigate('/home')
    }).catch((error) =>{
      toast.error(error.message);
      
    })
  }
  return (
    <div className="header shadow-md fixed top-0 left-0 right-0 bg-white">
      <div className="container h-16 flex m-auto items-center justify-between">
        <Link to={'/'}>
          <div className="logo flex items-center">
            <img src={logo} alt="" className='w-8 h-8'/>
            <h3 className='font-bold text-gray-900 ml-4'>Multimart</h3>
          </div>
        </Link>
        <div className="flex flex-1 justify-center items-center nav-links">
          {navLinks.map((link, index) => (
            <Link 
             
              className={`font-semibold m-4 hover:text-gray-900 ${location.pathname.slice(1)=== link.link ? 'text-gray-900' : 'text-gray-500'}`} 
              key={index} to={link.link}>{link.label}</Link>
          ))}
        </div>
        

        <div className="flex justify-end items-center">
         
          <div className="nav-heart m-4 relative">
            <div className="heart-amount absolute -top-2 -right-2 w-4 h-4 bg-gray-900 rounded-full text-white text-center leading-4 text-xs">1</div>
            <i className="fa-regular fa-heart text-lg"></i>
          </div>
          <Link to={'cart'}>
            <div className="nav-cart relative mr-4">
              <div className="cart-amount absolute -top-2 -right-2 w-4 h-4 bg-gray-900 rounded-full text-white text-center leading-4 text-xs">{amount}</div>
              <i className="fa-solid fa-cart-shopping text-lg"></i>
            </div>
          </Link>
          <div 
            onClick={toggleUserMenu}
            className="user w-8 h-8 relative" >
            <img src={currentUser ? currentUser.photoURL : user} alt="" className='w-full h-full border rounded-full'/>
            <div 
              // onClick={toggleUserMenu}

              className={`${openUserMenu? 'block' : 'hidden'} absolute top-full right-0 p-4 leading-8 bg-white z-20 shadow-sm shadow-slate-500 cursor-pointer`}>
              {currentUser ? (<span onClick={logout}>Logout</span>):
                <div className="flex flex-col">
                  <Link to={"/register"}>SignIn</Link>
                  <Link to={"/login"}>Login</Link>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </div>
              }
            </div>
          </div>

          <div 
            onClick={toggleMenu}
            className="toggle-menu hidden ml-4 text-lg">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      {open &&  <div className="fixed top-0 right-0 bottom-0 bg-white shadow-md shadow-black w-80 z-40 flex justify-center items-center flex-col">
      <div 
            onClick={toggleMenu}
            className="toggle-menu hidden ml-4 text-4xl text-red-500 absolute top-2 left-2">
            <i className="fa-solid fa-xmark"></i>
          </div>
          {navLinks.map((link, index) => (
            <Link 
             
              className={`font-semibold m-4 hover:text-gray-900 ${location.pathname.slice(1)=== link.link ? 'text-gray-900' : 'text-gray-500'}`} 
              key={index} to={link.link}>{link.label}</Link>
          ))}
        </div>}
    </div>
  );
}
