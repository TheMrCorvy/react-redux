import React, { Fragment } from "react"
import { connect } from "react-redux"

const Suplentes = ({ suplentes, quitarSuplente }) => (
	<Fragment>
		<section>
			<h2>Mis Jugadores Suplentes</h2>
			<div className="cancha">
				{suplentes.map((suplente, index) => (
					<article key={index} className="jugador">
						<img src={suplente.foto} alt={suplente.nombre} />
						<h3>{suplente.nombre}</h3>
						<button onClick={() => quitarSuplente(suplente)}>Eliminar</button>
					</article>
				))}
			</div>
		</section>
	</Fragment>
)

const mapStateToProps = (state) => ({
	suplentes: state.suplentes,
})

const mapDispatchToProps = (dispatch) => ({
	quitarSuplente(suplente) {
		dispatch({
			type: "QUITAR_SUPLENTE",
			suplente,
		})
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)
