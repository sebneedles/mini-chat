import React from 'react';
import AddAvatar from '../img/addAvatar.png';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">cHAt ApP</span>
        <span className="title">Inscription</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AddAvatar} alt="Ajouter un avatar" />
            <span>Ajouter un avatar</span>
          </label>
          <button>S'inscrire</button>
        </form>
        <p>Vous avez déjà un compte ? Se connecter</p>
      </div>
    </div>
  );
};

export default Register;
