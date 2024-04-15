/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import SearchBarName from './search'; // Import the SearchBarName component

describe('Testing Search Functionality', () => {
  // Individual test case
  it('should display search results based on user input', () => {
    // Mock the setSearchQuery function
    const setSearchQueryMock = jest.fn();

    // Render the SearchBarName component
    const { getByLabelText } = render(
      <SearchBarName searchQuery="" setSearchQuery={setSearchQueryMock} />
    );

    // Simulate user input by typing into the search input field
    const searchInput = getByLabelText(/search courses/i);
    fireEvent.change(searchInput, { target: { value: 'course' } });

    // Verify if setSearchQueryMock is called with the correct input value
    expect(setSearchQueryMock).toHaveBeenCalledWith('course');
  });
});