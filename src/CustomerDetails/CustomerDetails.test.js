import { render, screen } from '@testing-library/react';
import CustomerDetails from './index';

describe('CustomerDetails', () => {
    test('should render customer details', () => {
        const data = {
            name: "john",
            id: "123",
            address: "UK",
            nickname: "jo",
        }
        render(<CustomerDetails data={data} />);

        expect(screen.getByTestId("customer-details")).toBeInTheDocument();
        expect(screen.getByTestId("customer-name-heading")).toBeInTheDocument();
        expect(screen.getByTestId("customer-id")).toBeInTheDocument();
        expect(screen.getByTestId("customer-name")).toBeInTheDocument();
        expect(screen.getByTestId("customer-nickname")).toBeInTheDocument();
        expect(screen.getByTestId("customer-address")).toBeInTheDocument();

    });
});

