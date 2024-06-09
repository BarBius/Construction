import { useState } from "react";
import "./Profile.css"; // Importation du CSS pour la mise en page

const Profil = () => {
const [email, setEmail] = useState(""); // État pour le champ email

const handleInputChange = (e) => {
setEmail(e.target.value); // Mise à jour de l'état email
};

const handleDeleteUser = async () => {
// Logique pour supprimer l'utilisateur par email
try {
    const response = await fetch(`http://localhost:5001/users/${email}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    }
    });

    if (response.ok) {
    console.log(`Utilisateur avec l'email ${email} supprimé avec succès`);
    } else {
    console.error(`Erreur lors de la suppression de l'utilisateur: ${response.statusText}`);
    }
} catch (error) {
    console.error(`Erreur lors de la suppression de l'utilisateur: ${error}`);
}
};

const handleModifyUser = async () => {
// Logique pour modifier l'utilisateur
try {
    const response = await fetch(`http://localhost:5001/api/modif/users/${email}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ email }) // Mise à jour du champ email
    });

    if (response.ok) {
    console.log(`Utilisateur avec l'email ${email} modifié avec succès`);
    } else {
    console.error(`Erreur lors de la modification de l'utilisateur: ${response.statusText}`);
    }
} catch (error) {
    console.error(`Erreur lors de la modification de l'utilisateur: ${error}`);
}
};

const handleAddUser = async () => {
// Logique pour ajouter l'utilisateur
try {
    const response = await fetch(`http://localhost:5001/api/modif/users`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ email }) // Création d'un nouvel utilisateur avec le champ email
    });

    if (response.ok) {
    console.log(`Utilisateur avec l'email ${email} ajouté avec succès`);
    } else {
    console.error(`Erreur lors de l'ajout de l'utilisateur: ${response.statusText}`);
    }
} catch (error) {
    console.error(`Erreur lors de l'ajout de l'utilisateur: ${error}`);
}
};

return (
<div className="profil">
    <h1>Page de profil</h1>
    <input
    type="email"
    placeholder="Entrez votre email"
    value={email}
    onChange={handleInputChange}
    className="email-input"
    />
    <div className="button-container">
    <button className="delete-button" onClick={handleDeleteUser}>
        Supprimer l`utilisateur
    </button>
    <button className="modify-button" onClick={handleModifyUser}>
        Modifier l`utilisateur
    </button>
    <button className="add-button" onClick={handleAddUser}>
        Ajouter l`utilisateur
    </button>
    </div>
</div>
);
};

export default Profil;
