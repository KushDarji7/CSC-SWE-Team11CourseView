import React, { useState } from 'react';
import './CommentModal.css';
import ClientAPI from "../../api/clientAPI";
import CourseFeedbackForm from "../feedback.js";

export const CommentModal = ({ isOpen, onClose, handleAddReview, selectedCourse }) => {
  const [comment, setComment] = useState('');

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Write your review</h2>
        <br />
        <CourseFeedbackForm onSubmit={handleAddReview} selectedCourse={selectedCourse} />
        {/* Existing comment textarea */}
        <textarea
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <div className="button-container">
          <button className="close-button" onClick={onClose}>Close</button>
          <button className="post-button" onClick={() => handleAddReview(comment)}>Post</button>
        </div>
      </div>
    </div>
  );
};
