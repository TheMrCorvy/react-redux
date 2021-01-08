import React, { Fragment } from "react"
import Titulares from "./Titulares"
import Suplentes from "./Suplentes"

const EquipoSeleccionado = (props) => (
	<Fragment>
		<section>
			<Titulares />
			<Suplentes />
		</section>
	</Fragment>
)

export default EquipoSeleccionado
