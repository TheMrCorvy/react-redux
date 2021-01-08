import React, { Fragment } from "react"
import { connect } from "react-redux"

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => (
	<Fragment>
		<section>
			<h2>Jugadores</h2>
			<div className="container">
				{jugadores.map((jugador, index) => (
					<article key={index} className="jugador">
						<img src={jugador.foto} alt={jugador.nombre} />
						<h3>{jugador.nombre}</h3>
						<div>
							<button onClick={() => agregarTitular(jugador)}>Titular</button>
							<button onClick={() => agregarSuplente(jugador)}>Suplente</button>
						</div>
					</article>
				))}
			</div>
		</section>
	</Fragment>
)

const mapStateToProps = (state) => ({
	jugadores: state.jugadores,
})

const mapDispatchToProps = (dispatch) => ({
	agregarTitular(jugador) {
		dispatch({
			type: "AGREGAR_TITULAR",
			jugador,
		})
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)
