import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

const mockProducts = [
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

describe('<ProductList />', () => {
    it('Should render a list of products', () => {
        render(<ProductList items={mockProducts} />);
        const products = screen.getAllByRole('listitem');
        
        expect(products).toHaveLength(3);
    });

    it('should match snapshot', () => {
        render(<ProductList items={mockProducts} />);
        expect(screen.getByRole('list')).toMatchSnapshot();
    });
});