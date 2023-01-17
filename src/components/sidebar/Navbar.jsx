import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">cHAt ApP </span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>Jane</span>
        <button onClick={() => signOut(auth)}>Déconnexion</button>
      </div>
    </div>
  );
};

export default Navbar;
