import React from 'react';
import spinner from '../spinner.gif';

const LoadingSpinner = ({ isLoading }) => (
    isLoading && 
    <div data-testid="spinner-wrapper">
        <img src={spinner} alt='spinner' data-testid="img-spinner"/>
    </div>
);

export default LoadingSpinner;
