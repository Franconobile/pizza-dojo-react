import React from 'react'
import { Link } from 'react-router-dom';
import { HomeContentWrapper } from "./HomeContentStyle";

const HomeContent = () => {
  return (
    <HomeContentWrapper>
        <h1>¡Bienvenido a Pizza Dojo!</h1>
        <section className="dojo-info">
				<div className="dojo-about">
					<h2>Quizás quieras conocernos:</h2>
					<p>
						Humilde negocio gastronómico destinado a la elaboración de las
						mejores y más exquisitas <Link to="/products" className='pizzaLink'>Pizzas</Link> para el deguste
						tuyo y de tus conocidos. Hacemos
						enviós a domicilio o podes retirar en nuestras
						sucursales o casa central en las siguientes
						direcciones. ¡Te esperamos!
					</p>
				</div>
                <img src={require('../assets/pizza1.png')} id="pizzaHome" alt="Pizza servida"/>
			</section>
    </HomeContentWrapper>
  )
}

export default HomeContent