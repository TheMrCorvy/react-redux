import React, { Fragment } from "react"
import { connect } from "react-redux"

const Titulares = ({ titulares }) => (
	<Fragment>
		<section>
			<h2>Mis Jugadores Titulares</h2>
			<div className="cancha">
				{titulares.map((titular, index) => (
					<article key={index} className="jugador">
						<img src={titular.foto} alt={titular.nombre} />
						<h3>{titular.nombre}</h3>
						<button>Eliminar</button>
					</article>
				))}
			</div>
		</section>
	</Fragment>
)

const mapStateToProps = (state) => ({
	titulares: state.titulares,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)
