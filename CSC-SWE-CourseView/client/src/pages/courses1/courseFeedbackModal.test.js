/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent, waitFor } from '@testing-library/react';
import CourseFeedbackModal from './courseFeedbackModal'; // Import the CourseFeedbackModal component

describe('CourseFeedbackModal Component', () => {
  // Test case for rendering the modal with selected course
  it('should render the modal with selected course', () => {
    const selectedCourse = { title: 'Selected Course Title' };
    const handleSubmitFeedback = jest.fn(); // Mock function

    const { getByText } = render(
      <CourseFeedbackModal selectedCourse={selectedCourse} handleSubmitFeedback={handleSubmitFeedback} />
    );

    // Assert that the modal displays the selected course title
    expect(getByText('Selected Course Title')).toBeInTheDocument();
  });
  
});

describe('User Unable to Leave Review of Ineligible Course', () => {
    // Test case for informing the user that they cannot leave a review for the selected course
    it('should inform the user that they cannot leave a review for the selected course', () => {
        const selectedCourse = null; // Simulating an ineligible course
        const handleSubmitFeedback = jest.fn(); // Mock function

        const { getByText } = render(
        <CourseFeedbackModal selectedCourse={selectedCourse} handleSubmitFeedback={handleSubmitFeedback} />
        );

        // Assert that the modal informs the user about the inability to leave a review
        expect(getByText('You cannot leave a review for this course.')).toBeInTheDocument();
    });

    // Mock the courseController module
    jest.mock('./courseController', () => ({
    leaveReview: jest.fn(),
}));

describe('User Unable to Leave Review of Ineligible Course', () => {
    // Test case for informing the user that they cannot leave a review for the selected course
    it('should inform the user that they cannot leave a review for the selected course', () => {
    // Import the leaveReview function from the mocked module
    const { leaveReview } = require('./courseController');

    // Mock the review data for an ineligible course
    const reviewData = {
    courseId: 'ineligibleCourse123', // Course ID of an ineligible course
    userId: 'user123',
    rating: 5,
    comment: 'Great course!',
    };

    // Mock the leaveReview function to return an error
    leaveReview.mockReturnValue('error');

    // Render the CourseFeedbackModal component with null selectedCourse
    const component = new CourseFeedbackModal({ selectedCourse: null, handleSubmitFeedback: jest.fn() });

    // Call the handleSubmitFeedback method
    component.handleSubmitFeedback(reviewData);

    // Assert that the leaveReview function is called with the reviewData
    expect(leaveReview).toHaveBeenCalledWith(reviewData);
    });

    });
});


