import  { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css"; 

const Dashboard = () => {
const [dashboardData, setDashboardData] = useState(null);
const [errorMessage, setErrorMessage] = useState("");
const navigate = useNavigate();

useEffect(() => {
// Fetch data
fetchDashboardData();
}, []);

const fetchDashboardData = async () => {
try {
    const response = await fetch("http://localhost:5001/api/dashboard", {
    method: "GET",
    credentials: "include",
    });

    if (response.status === 200) {
    const data = await response.json();
    setDashboardData(data);
    } else {
    console.error("Error fetching dashboard data");
    setErrorMessage(
        "Une erreur s'est produite lors du chargement des données du tableau de bord."
    );
    }
} catch (error) {
    console.error("Error fetching dashboard data", error);
    setErrorMessage(
    "Une erreur s'est produite lors du chargement des données du tableau de bord."
    );
}
};

const handleLogout = async () => {
try {
    const response = await fetch("http://localhost:5001/api/users/logout", {
    method: "POST",
    credentials: "include",
    });

    if (response.status === 200) {
    // Redirect to the login page after logout
    navigate("/login");
    } else {
    console.error("Error logging out");
    setErrorMessage("Une erreur s'est produite lors de la déconnexion.");
    }
} catch (error) {
    console.error("Error logging out", error);
    setErrorMessage("Une erreur s'est produite lors de la déconnexion.");
}
};

return (
<div className="dashboard">
    <h1>Dashboard</h1>
    {errorMessage && <p className="error">{errorMessage}</p>}
    <div className="dashboard-content">
    <div className="dashboard-sidebar">
        <ul>
        <li>
            <Link to="/profile">Profiles</Link>
        </li>
        <li>
            <button onClick={handleLogout}>Logout</button>
        </li>
        </ul>
    </div>
    <div className="dashboard-main">
        <img
        src="https://cdn-icons-png.flaticon.com/512/1871/1871188.png"
        alt="Dashboard Icon"
        />
        {dashboardData ? (
        <p>{dashboardData.message}</p>
        ) : (
        <p>Loading dashboard data...</p>
        )}
    </div>
    </div>
</div>
);
};

export default Dashboard;
