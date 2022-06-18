import React from 'react';
import logo from '../img/logo.png'
import avatar from '../img/avatar.png'
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue()

  const login = async () => {
    const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    })
  }

  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop and tablet */}
      <div className='hidden md:flex w-full h-full'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={logo} className='w-8 object-cover' alt="logo" />
          <p className='text-gray-dark text-xl font-bold'>City</p>
        </Link>
        <ul className='flex items-center gap-8 ml-auto'>
          <li className='text-base text-gray hover:text-gray-dark transition-text-color ease-in-out cursor-pointer'>Menu</li>
          <li className='text-base text-gray hover:text-gray-dark transition-text-color ease-in-out cursor-pointer'>About</li>
          <li className='text-base text-gray hover:text-gray-dark transition-text-color ease-in-out cursor-pointer'>Service</li>
          <li className='text-base text-gray hover:text-gray-dark transition-text-color ease-in-out cursor-pointer'>Home</li>
        </ul>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket className='text-gray text-2xl ml-8 cursor-pointer' />
          <div className='absolute -top-2 -right-6 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>2</p>
          </div>
        </div>

        <div className='relative'>
          <motion.img whileTap={{ scale: 0.6 }} src={avatar} className='w-10 min-h-[40] ml-16 cursor-pointer' alt='avatar' onClick={login} />
        </div>



      </div>
      {/* mobile */}
      <div className='flex md:hidden w-full'></div>
    </header>
  );
};

export default Header;