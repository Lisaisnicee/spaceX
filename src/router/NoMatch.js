import { Link, useLocation } from 'react-router-dom'

import '../styles/css/error.css'

/**

 * This is a React component that displays a 404 error message with the current page path and a link to

 * the homepage.

 * @returns A functional component named `NoMatch` is being returned. It displays a message "404" along

 * with the current page's path using `useLocation` hook. It also provides a button to navigate back to

 * the home page using `Link` component from `react-router-dom`.

 */

export default function NoMatch() {

    let location = useLocation()




    return (

        <>

            <div className="central-body">

                {/* <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt='erreur' /> */}

                <div className='number-404'>404</div>

                <div className='text-404'>Il semblerait que vous soyez perdu dans l'espace</div>

                <a href="/" className="btn-go-home">Retour à la page d'accueil</a>

            </div>

            <div className="objects">

                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt='erreur'/>

                <div className="earth-moon">

                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt='erreur'/>

                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt='erreur'/>

                </div>

                <div className="box_astronaut">

                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt='erreur'/>

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

    )

}