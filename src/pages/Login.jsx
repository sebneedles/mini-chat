import React from 'react';

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">cHAt ApP</span>
        <span className="title">Connexion</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Se connecter</button>
        </form>
        <p>Vous n'avez pas de compte ? S'inscrire'</p>
      </div>
    </div>
  );
};

export default Login;
