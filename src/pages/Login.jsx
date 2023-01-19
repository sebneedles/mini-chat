import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  //////////////
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      ////////////
    } catch (err) {
      setErr(true);
    }
  };
  /////////////
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">cHAt ApP</span>
        <span className="title">Connexion</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Se connecter</button>
          {err && (
            <span className="danger">Quelque chose s'est mal passé ...</span>
          )}
        </form>
        <p>
          Vous n'avez pas de compte ? <Link to="/register">S'inscrire</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
