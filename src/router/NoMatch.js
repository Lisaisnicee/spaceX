import { Link, useLocation } from 'react-router-dom';

import '../styles/css/error.css';

export default function NoMatch() {
  let location = useLocation();

  return (
    <>
      <div className="central-body">
        {/* <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt='erreur' /> */}

        <div className="number-404">404</div>

        <div className="text-404">
          Il semblerait que vous soyez perdu dans l'espace
        </div>

        <a href="/" className="btn-go-home">
          Retour à la page d'accueil
        </a>
      </div>

      <div className="objects">
        <img
          className="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40px"
          alt="erreur"
        />

        <div className="earth-moon">
          <img
            className="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px"
            alt="erreur"
          />

          <img
            className="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80px"
            alt="erreur"
          />
        </div>

        <div className="box_astronaut">
          <img
            className="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px"
            alt="erreur"
          />
        </div>
      </div>

      <div className="glowing_stars">
        <div className="star"></div>

        <div className="star"></div>

        <div className="star"></div>

        <div className="star"></div>

        <div className="star"></div>
      </div>
    </>
  );
}
