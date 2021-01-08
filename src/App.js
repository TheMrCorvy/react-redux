import React from "react"
import Jugadores from "./components/Jugadores"
import EquipoSeleccionado from "./components/EquipoSeleccionado"
import { Provider } from "react-redux"
import store from "./store"

function App() {
	return (
		<Provider store={store}>
			<main>
				<h1>EDManager</h1>
				<Jugadores />
				<EquipoSeleccionado />
			</main>
		</Provider>
	)
}

export default App
