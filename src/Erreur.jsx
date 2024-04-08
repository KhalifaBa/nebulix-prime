import { Link } from "react-router-dom";

export default function Erreur() {
  return (
    <div>
      <h1>404 Page non trouvée</h1>
      <br></br>
      <Link to="/">Accueil</Link>
    </div>
  );
}
