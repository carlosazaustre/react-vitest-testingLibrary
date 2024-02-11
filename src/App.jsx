import { useState } from 'react';
import ProductList from './components/ProductList';
import { changeOrderByPrice } from './helpers/changeOrderByPrice';

const initialProducts = [
	{
		id: 1,
		name: "Cachopo",
		price: 30,
	},
	{
		id: 2,
		name: "Chorizo a la sidra",
		price: 15,
	},
	{
		id: 3,
		name: "Navajas",
		price: 25,
	},
];

function App() {
	const [products, setProducts] = useState(initialProducts);

	return (
		<div className="App">
			<ProductList items={products} />
			<button
				onClick={() => setProducts(changeOrderByPrice(products))}
			>
				Order by price
			</button>
		</div>
	);
}

export default App;
