import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <section className="error-container">
        <div className="error">404</div>
        <div className="error-text">Oups ! La page que vous demandez n'existe pas.</div>
        <Link className="error-link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </>
  );
}

export default Error;
