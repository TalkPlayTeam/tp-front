import React, { useState } from "react";
import '../../styles/loginPage.css'; 

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Gérer la soumission du formulaire
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Traitement de la connexion ici
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="forgot-password">Mot de passe oublié?</a>
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default LoginPage;
