import { render, screen } from '@testing-library/react';
import LoadingSpinner from './index';

describe('LoadingSpinner', () => {
    describe('when isLoading is true', () => {
        test('should render loading spinner', () => {
            render(<LoadingSpinner isLoading={true} />);

            expect(screen.getByTestId('spinner-wrapper')).toBeInTheDocument();
            expect(screen.getByTestId('img-spinner')).toBeInTheDocument();
        })
    })
    describe('when isLoading is false', () => {
        test('should return undefined', () => {
            render(<LoadingSpinner isLoading={false} />);

            expect(screen.queryByTestId('spinner-wrapper')).not.toBeInTheDocument();
            expect(screen.queryByTestId('img-spinner')).not.toBeInTheDocument();
        })
    })
});

