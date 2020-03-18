import React from 'react'
import ReactDOM from 'react-dom'

const TarjetaFruta = (props) => (
	<div>
		<h3>{props.name}</h3>
		<hr />
		<p> $ {props.price}</p>
	</div>
)

const App = () => (
	<div>
		<TarjetaFruta name='Sandia' />
		<TarjetaFruta name='Naranja' price={2.00} />
		<TarjetaFruta name='Naranja' />
		<TarjetaFruta name='Naranja' />
		<TarjetaFruta name='Naranja' />
		<TarjetaFruta name='Naranja' />
		<TarjetaFruta name='Naranja' />
		<TarjetaFruta name='Naranja' >
		</TarjetaFruta>
	</div>
)


ReactDOM.render(<App />, document.getElementById('root'));