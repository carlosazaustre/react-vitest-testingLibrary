import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
    it('should match snapshot without props', () => {
        render(<Button />);
        expect(screen.getByRole('button')).toMatchSnapshot();
    });

    it('should match snapshot with primary prop', () => {
        render(<Button primary />);
        expect(screen.getByRole('button')).toMatchSnapshot();
    });
});