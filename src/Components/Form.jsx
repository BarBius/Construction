import { useState } from 'react';
import './Form.css';

const Form = () => {
// État pour les champs du formulaire
const [nom, setNom] = useState(''); // Nom et prénom
const [email, setEmail] = useState(''); // Adresse email
const [telephone, setTelephone] = useState(''); // Numéro de téléphone
const [ville, setVille] = useState(''); // Ville
const [projet, setProjet] = useState(''); // Description du projet
const [budget, setBudget] = useState(''); // Budget du projet
const [date, setDate] = useState(''); // Date de réalisation du projet

// Fonction pour gérer la soumission du formulaire
const handleSubmit = async (event) => {
event.preventDefault(); // Empêche le comportement par défaut du formulaire

const formData = {
    nom,
    email,
    telephone,
    ville,
    projet,
    budget,
    date
};

try {
    const response = await fetch('http://localhost:5001/api/devis', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
    });

    if (response.ok) {
    // Si la réponse est OK, affiche un message de succès
    console.log('Soumission du formulaire réussie');
    } else {
    // Si la réponse est en erreur, affiche un message d'erreur
    console.error('Erreur lors de la soumission du formulaire:', response.statusText);
    }
} catch (error) {
    // Si une erreur survient lors de la soumission, affiche un message d'erreur
    console.error('Erreur lors de la soumission du formulaire:', error);
}
};

return (
<section>
    <h1 className='devis'>Demander un devis</h1>
    <form className="form" onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="nom">Nom - Prénom *</label>
        <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
    </div>
    <div className="form-group">
        <label htmlFor="email">Adresse email *</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>
    <div className="form-group">
        <label htmlFor="telephone">Téléphone *</label>
        <input type="tel" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
    </div>
    <div className="form-group">
        <label htmlFor="ville">Ville *</label>
        <input type="text" id="ville" value={ville} onChange={(e) => setVille(e.target.value)} required />
    </div>
    <div className="form-group">
        <label htmlFor="projet">Quel est votre projet?</label>
        <textarea id="projet" value={projet} onChange={(e) => setProjet(e.target.value)}></textarea>
    </div>
    <div className="form-group">
        <label htmlFor="budget">Quel est votre budget?</label>
        <input type="text" id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} />
    </div>
    <div className="form-group">
        <label htmlFor="date">Date de réalisation du projet</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
    </div>
    <button type="submit">Envoyer</button>
    </form>
</section>
);
};

export default Form;