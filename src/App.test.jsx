import { describe, it, expect} from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import App from './App';


describe('<App />', () => {
    it('Should render a list of products and a button to order them', () => {
        render(<App />);
        const products = screen.getAllByRole('listitem');
        expect(products).toHaveLength(3);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it("should order products by price when the button is clicked", async () => { 
        render(<App />);
        const button = screen.getByRole('button');

        act(() => {
            fireEvent.click(button);
        });
        
        await waitFor(() => {
            const products = screen.getAllByRole('listitem');
            expect(products[0]).toHaveTextContent('Cachopo');
            expect(products[1]).toHaveTextContent('Navajas');
            expect(products[2]).toHaveTextContent('Chorizo a la sidra');
        });
    });
});