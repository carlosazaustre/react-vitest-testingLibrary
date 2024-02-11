export default function ProductList({items}) {
	return (
        <ul>
            {items.map((item) => (
                <li key={item.id} value={item.name}>{item.name} - ${item.price}</li>
            ))}
        </ul>
	);
}