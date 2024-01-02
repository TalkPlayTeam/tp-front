import React, { useState } from "react";
import '../../styles/lostPassword.css'; 

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  // Gérer l'envoi du formulaire
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Envoyer l'email de réinitialisation ici
    console.log("Réinitialisation envoyée à: ", email);
  };

  return (
    <div className="forgot-password-container">
      <h1>Mot de passe oublié</h1>
      <p>Veuillez entrer votre adresse e-mail. Un lien pour réinitialiser votre mot de passe vous sera envoyé.</p>
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
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
