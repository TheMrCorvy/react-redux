import React, { Fragment } from "react"
import { connect } from "react-redux"

const Suplentes = ({ suplentes }) => (
	<Fragment>
		<section>
			<h2>Mis Jugadores Suplentes</h2>
			<div className="cancha">
				{suplentes.map((titular, index) => (
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
	suplentes: state.suplentes,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)
