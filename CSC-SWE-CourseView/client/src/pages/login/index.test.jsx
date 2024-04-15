/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Login } from './login'; // Import the Login component

describe('Login Component', () => {
  // Test case for rendering the login form
  it('should render the login form', () => {
    const { getByText, getByLabelText } = render(<Login />);
    
    // Assert that the login form elements are present
    expect(getByText('Sign In')).toBeInTheDocument();
    expect(getByLabelText('Email Address')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Sign In')).toBeInTheDocument();
  });

  // Test case for submitting the login form with invalid credentials
  it('should not log in with incorrect credentials', async () => {
    const { getByText, getByLabelText, findByText } = render(<Login />);
    const emailInput = getByLabelText('Email Address');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Sign In');

    // Mock user input with invalid credentials
    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidPassword' } });

    // Trigger form submission
    fireEvent.click(submitButton);

    // Wait for alert message
    await findByText('Login fail.');
  });

  // Add more test cases for valid login, sign up, etc. as needed
});
