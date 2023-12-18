import React, { useState, useEffect } from 'react';
import '../styles/inscription.css'; 
import { useTranslation } from 'react-i18next';

const InscriptionForm = ({ preloadedEmail }: { preloadedEmail: string | null }) =>  {
  const [email, setEmail] = useState(preloadedEmail || '');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const { t, i18n } = useTranslation(); // Utilisation de useTranslation ici

  useEffect(() => {
    // setEmail(fetchedEmailFromDB);
  }, []); 

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Code de gestion de la soumission du formulaire
  };

  return (
    <div className="first_part_inscription">
      <title>Inscription - Talkplay</title>
      <header className="title_inscription">
        <h1>{t('Inscription')}</h1>
        <h3>Créez un compte TalkPlay</h3>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('fr')}>Français</button>
        </div>
      </header>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Email (préinscrit) :</label>
        <input type="email" value={email} readOnly />
      </div>
      <div>
        <label>Pseudo :</label>
        <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} required />
      </div>
      <div>
        <label>Mot de passe :</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Langue :</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} required>
          <option value="">Sélectionner</option>
          <option value="fr">Français</option>
          <option value="en">Anglais</option>
          {/* Ajoutez d'autres options de langue ici */}
        </select>
      </div>
      <div>
        <label>Pays de résidence :</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)} required>
          <option value="">Sélectionner</option>
          <option value="France">France</option>
          <option value="Belgique">Belgique</option>
          {/* Ajoutez d'autres options de pays ici */}
        </select>
      </div>
      <button type="submit">Inscription</button>
    </form>
    </div>
  );
}

export default InscriptionForm;
