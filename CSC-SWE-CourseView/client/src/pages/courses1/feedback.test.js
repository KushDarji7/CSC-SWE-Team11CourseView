/* eslint-disable no-undef */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import CourseFeedbackForm from './feedback'; // Import the CourseFeedbackForm component

// Mock the feedbackController module
jest.mock('./feedbackController', () => ({
  guestUserFeedback: jest.fn(),
}));

describe('Guest User Reads Feedback of Classes', () => {
  // Test case for allowing a guest user to read feedback of classes
  it('should allow a guest user to read feedback of classes', () => {
    // Import the guestUserFeedback function from the mocked module
    const { guestUserFeedback } = require('./feedbackController');

    // Mock the userId for the guest user
    const userId = 'guest123';

    // Call the guestUserFeedback function
    const result = guestUserFeedback(userId);

    // Assert that the guestUserFeedback function is called with the userId
    expect(guestUserFeedback).toHaveBeenCalledWith(userId);

    // Assert the expected result
    expect(result).toBeDefined(); // Example assertion, replace with your actual expected result
    // You might have different expected results depending on your implementation
  });
});

 
// Mock the feedbackController module
jest.mock('./feedbackController', () => ({
  feedbackQuestionnaire: jest.fn(),
}));
describe('Feedback Questionnaire Appears Correctly', () => {
  // Test case for displaying the feedback questionnaire correctly
  it('should display the feedback questionnaire correctly', () => {
	// Mock the feedbackQuestionnaire function
	const { feedbackQuestionnaire } = require('./feedbackController');
 
	// Render the CourseFeedbackForm component
	const { getByText, getByLabelText, getByRole } = render(
  	<CourseFeedbackForm />
	);
	// Assert that the feedbackQuestionnaire function is called
    expect(feedbackQuestionnaire).toHaveBeenCalled();
	// Assert that all questions and rating scales are displayed
	expect(getByText('The course material was relevant to the subject matter')).toBeInTheDocument();
	expect(getByRole('radio', { name: 'Strongly Disagree' })).toBeInTheDocument();
	expect(getByRole('radio', { name: 'Disagree' })).toBeInTheDocument();
	expect(getByRole('radio', { name: 'Neutral' })).toBeInTheDocument();
	expect(getByRole('radio', { name: 'Agree' })).toBeInTheDocument();
	expect(getByRole('radio', { name: 'Strongly Agree' })).toBeInTheDocument();
  });
});


// Mock the feedbackController module
jest.mock('./feedbackController', () => ({
  navigateAwayBeforeSubmitting: jest.fn(),
}));
describe('User Navigates Away Before Submitting Feedback', () => {
  // Test case for prompting the user with a confirmation before leaving the page
  it('should prompt the user with a confirmation before leaving the page', () => {
    // Mock the navigateAwayBeforeSubmitting function
    const { navigateAwayBeforeSubmitting } = require('./feedbackController');

    // Render the CourseFeedbackForm component
    const { getByTestId } = render(
      <CourseFeedbackForm />
    );
    // Fire beforeunload event
    fireEvent(window, new Event('beforeunload'));

    // Assert that the navigateAwayBeforeSubmitting function is called
    expect(navigateAwayBeforeSubmitting).toHaveBeenCalled();
  });
});


// Mock the feedbackController module
jest.mock('./feedbackController', () => ({
  storeFeedbackInDatabase: jest.fn(),
}));
describe('Feedback Successfully Stored in Database', () => {
  // Test case for successfully storing the feedback in the database
  it('should successfully store the feedback in the database', () => {
    // Mock the storeFeedbackInDatabase function
    const { storeFeedbackInDatabase } = require('./feedbackController');
    // Render the CourseFeedbackForm component
    const { getByTestId } = render(
      <CourseFeedbackForm />
    );
    // Simulate filling out the feedback questionnaire (you can use fireEvent to interact with the form)
    // Simulate submitting feedback
    fireEvent.submit(getByTestId('form_user'));
    // Assert that the storeFeedbackInDatabase function is called
    expect(storeFeedbackInDatabase).toHaveBeenCalled();
  });
});

// Mock the feedbackController module
jest.mock('./feedbackController', () => ({
  displayFeedbackForCourse: jest.fn(() => [
    // Mocked feedback data for testing
    {
      id: 1,
      courseName: 'Course A',
      ratings: {
        content: 4,
        environment: 5,
        assignments: 3,
        interaction: 4,
        feedback: 5,
        organization: 4,
        relevance: 5,
      },
      comments: 'This course was fantastic!',
      // Add more feedback entries as needed for testing different scenarios
    },
    // Add more mock feedback entries as needed
  ]),
}));


	// Mock the feedbackController module
	jest.mock('./feedbackController', () => ({
	  displayFeedbackForCourse: jest.fn(() => [
	    // Mocked feedback data for testing
	    {
	      id: 1,
	      courseName: 'Course A',
	      ratings: {
	        content: 4,
	        environment: 5,
	        assignments: 3,
	        interaction: 4,
	        feedback: 5,
	        organization: 4,
	        relevance: 5,
	      },
	      comments: 'This course was fantastic!',
	      // Add more feedback entries as needed for testing different scenarios
	    },
	    // Add more mock feedback entries as needed
	  ]),
	}));
	
	describe('Handling Incorrect Display of Feedback for a College Course', () => {
	  // Test case for displaying feedback for the selected course accurately
	  it('should display feedback for the selected course accurately', () => {
	    // Render the CourseFeedbackForm component
	    const { getByText } = render(
	      <CourseFeedbackForm />
	    );
	
	    // Simulate the display of feedback for a course
	    const courseName = 'Course A';
	    const displayedFeedback = getByText(courseName);
	
	    // Assert that the displayed feedback information matches the expected data
	    expect(displayedFeedback).toBeInTheDocument();
	    // You can add more assertions to verify ratings, comments, etc.
	
	    // You can also verify the displayed feedback against the mock data provided by the feedbackController module
	    const { displayFeedbackForCourse } = require('./feedbackController');
	    const feedbackData = displayFeedbackForCourse();
	    feedbackData.forEach(feedback => {
	    const courseElement = getByText(feedback.courseName);
	      expect(courseElement).toBeInTheDocument();
	       // Add assertions for ratings, comments, etc.
	     });
	  });
	});

	

	describe('Verifying Feedback Submission Confirmation', () => {
	  // Test case for displaying a confirmation message after submitting feedback
	  it('should display a confirmation message after submitting feedback', async () => {
	    // Render the CourseFeedbackForm component
	    const { getByText, getByRole } = render(
	      <CourseFeedbackForm />
	    );
	
	    // Assert that all questions and rating scales are displayed
	    expect(getByText('The course material was relevant to the subject matter')).toBeInTheDocument();
	    expect(getByRole('radio', { name: 'Strongly Disagree' })).toBeInTheDocument();
	    expect(getByRole('radio', { name: 'Disagree' })).toBeInTheDocument();
	    expect(getByRole('radio', { name: 'Neutral' })).toBeInTheDocument();
	    expect(getByRole('radio', { name: 'Agree' })).toBeInTheDocument();
	    expect(getByRole('radio', { name: 'Strongly Agree' })).toBeInTheDocument();
	    
	    // Simulate clicking on the "Submit" button
	    const submitButton = getByRole('button', { name: /submit/i });
	    fireEvent.click(submitButton);
	
	    // Wait for the submission process to complete
	    await waitFor(() => {
	      // Check for the presence of the confirmation message on the screen
	      const confirmationMessage = getByText(/feedback submitted successfully/i);
	      expect(confirmationMessage).toBeInTheDocument();
	    });
	  });
});



describe('Testing Feedback Privacy Settings', () => {
  // Individual test case
  it('should save and apply the feedback privacy settings correctly', () => {
    // Render the CourseFeedbackForm component
    const { getByLabelText, getByText } = render(
      <CourseFeedbackForm />
    );

    // Simulate adjusting the privacy settings
    const privacySettingsDropdown = getByLabelText(/feedback visibility/i);
    fireEvent.change(privacySettingsDropdown, { target: { value: 'private' } });

    // Simulate saving the changes to the privacy settings
    const saveButton = getByText(/save settings/i);
    fireEvent.click(saveButton);

    const feedbackVisibilityElement = getByText(/feedback is visible to:/i);
    expect(feedbackVisibilityElement).toBeInTheDocument();
  });
});

