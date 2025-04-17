import React from 'react';
import './ErrorPage.scss';

interface ErrorPageProps {
  error: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <div className="error-page">
      <h1 className="error-title">Something went wrong 😞</h1>
      <p className="error-message">{error}</p>
    </div>
  );
};

export default ErrorPage;
