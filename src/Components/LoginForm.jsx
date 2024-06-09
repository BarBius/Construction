import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';

const LoginForm = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleLoginSubmit = async (event) => {
event.preventDefault();
setLoading(true);

try {
    const response = await fetch("http://localhost:5001/api/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
        "Content-Type": "application/json",
    },
    credentials: "include",
    });

    if (response.status === 200) {
    setSuccessMessage("Connexion réussie");
    navigate("/dashboard", { replace: true });
    } else {
    setErrorMessage("Connexion refusée");
    }
} catch (error) {
    console.error(error);
    setErrorMessage("Erreur de connexion");
} finally {
    setLoading(false);
}
};

return (
<div className="login-form">
    {successMessage && <p className="success">{successMessage}</p>}
    {errorMessage && <p className="error">{errorMessage}</p>}
    <form onSubmit={handleLoginSubmit}>
    <div className="form-group1">
        <label htmlFor="email">Email:</label>
        <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
    </div>
    <div className="form-group1">
        <label htmlFor="password">Mot de passe:</label>
        <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
    </div>
    <input
        type="submit"
        value={loading ? "Chargement..." : "Se connecter"}
        disabled={loading}
    />
    </form>
</div>
);
};

export default LoginForm;