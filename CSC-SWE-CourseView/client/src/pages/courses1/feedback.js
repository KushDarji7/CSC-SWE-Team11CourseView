import React, { useState  } from 'react';

const CourseFeedbackForm = ({onSubmit, selectedCourse}) => {
  const [ratings, setRatings] = useState({
    content: '',
    environment: '',
    assignments: '',
    interaction: '',
    feedback: '',
    organization: '',
    relevance: '',
    free_form: '',
  });

  const initialRatings = {
    content: '',
    environment: '',
    assignments: '',
    interaction: '',
    feedback: '',
    organization: '',
    relevance: '',
    free_form: '',
  };

  const [showWarning, setShowWarning] = useState(false); 
  const [anonymous, setAnonymous] = useState(false); // State for anonymous feedback

  // Function to check if all radio inputs are checked
  const allRadioChecked = () => {
    const radioGroups = [
      'content',
      'environment',
      'assignments',
      'interaction',
      'feedback',
      'organization',
      'relevance'
    ];

    return radioGroups.every(group => {
      const checkedRadio = document.querySelector(`input[name="${group}"]:checked`);
      return checkedRadio !== null;
    });
  };

  const handleReset = () => {
    // Reset form values
    setRatings(initialRatings);

    //Reset form fields
    const form = document.getElementById('form_user');
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
    });
    form.querySelector('textarea').value = '';
    

  };

  const handleChange = (e) => {
    const { name, value } = (e.target);
    const intValue = parseInt(value,10);
    if(Number.isInteger(intValue)){
      setRatings({ ...ratings, [name]: intValue });
    }else{
      setRatings({ ...ratings, [name]: value });
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all radio inputs are checked (validation)
    if (!allRadioChecked()) {
      // Display an error message or perform any other action to indicate that all ratings must be selected
      //alert('Please select ratings for all categories.');
      setShowWarning(true);
    }else{
      const feedback = [selectedCourse.crn, ratings, anonymous]

      // Call the onSubmit function and pass the ratings data and crn number
      onSubmit(feedback);

      // Reset form values
      setRatings(initialRatings);

      //Reset form fields
      const form = document.getElementById('form_user');
      const inputs = form.querySelectorAll('input[type="radio"]');         
      inputs.forEach(input => {
          input.checked = false;
      });
      form.querySelector('textarea').value = '';
      setAnonymous(false);
      const toggleButton = document.getElementById('anonymousToggle');
      toggleButton.checked = false;
      setShowWarning(false);
      
    }
    
  };

  return (
    <form className="feedback-toolbar"  id="form_user" onSubmit={handleSubmit}>
      {/* Your rating inputs here */}
      
      <div className="form-check form-switch">
          <label className="form-check-label form-check-label-lg" htmlFor="anonymousToggle">Anonymous (Toggle to send anonymous feedback)</label>
          <input
            className="form-check-input form-check-input-lg"
            type="checkbox"
            id="anonymousToggle"
            onChange={() => setAnonymous(!anonymous)}
          />
        </div>
        <div className="feedback-toolbar btn-toolbar" role="toolbar" aria-label="CourseFeedback">
            <h5>The course material was relevant to the subject matter.</h5>
            <br></br>
            <div class="feedback-questions btn-group" role="group" aria-label="content">
                
                <input type="radio" class="btn-check" name="content" id="btnradio1" autocomplete="off" value="1" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio1">Strongly Disagree</label>
    
                <input type="radio" class="btn-check" name="content" id="btnradio2" autocomplete="off" value="2" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio2">Disagree</label>
    
                <input type="radio" class="btn-check" name="content" id="btnradio3" autocomplete="off" value="3" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio3">Neutral</label>
            
                <input type="radio" class="btn-check" name="content" id="btnradio4" autocomplete="off" value="4" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio4">Agree</label>
            
                <input type="radio" class="btn-check" name="content" id="btnradio5" autocomplete="off" value="5" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio5"> Strongly Agree</label>
            </div>

            <h5>The classroom facilities and resources were conducive to learning.</h5>
            <br></br>
            <div class="feedback-questions btn-group" role="group" aria-label="environment">
                
                <input type="radio" class="btn-check" name="environment" id="btnradio6" autocomplete="off" value="1" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio6">Strongly Disagree</label>
    
                <input type="radio" class="btn-check" name="environment" id="btnradio7" autocomplete="off" value="2" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio7">Disagree</label>
    
                <input type="radio" class="btn-check" name="environment" id="btnradio8" autocomplete="off" value="3" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio8">Neutral</label>
            
                <input type="radio" class="btn-check" name="environment" id="btnradio9" autocomplete="off" value="4" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio9">Agree</label>
            
                <input type="radio" class="btn-check" name="environment" id="btnradio10" autocomplete="off" value="5" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio10"> Strongly Agree</label>
            </div>

            <h5>The assignments/exams effectively assessed my understanding of the course material.</h5>
            <br></br>
            <div class="feedback-questions btn-group" role="group" aria-label="assignments">
                
                <input type="radio" class="btn-check" name="assignments" id="btnradio11" autocomplete="off" value="1" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio11">Strongly Disagree</label>
    
                <input type="radio" class="btn-check" name="assignments" id="btnradio12" autocomplete="off" value="2" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio12">Disagree</label>
    
                <input type="radio" class="btn-check" name="assignments" id="btnradio13" autocomplete="off" value="3" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio13">Neutral</label>
            
                <input type="radio" class="btn-check" name="assignments" id="btnradio14" autocomplete="off" value="4" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio14">Agree</label>
            
                <input type="radio" class="btn-check" name="assignments" id="btnradio15" autocomplete="off" value="5" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio15"> Strongly Agree</label>
            </div>

            <h5>The course encouraged active participation and engagement from students.</h5>
            <br></br>
            <div class="feedback-questions btn-group" role="group" aria-label="interaction">
                
                <input type="radio" class="btn-check" name="interaction" id="btnradio16" autocomplete="off" value="1" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio16">Strongly Disagree</label>
    
                <input type="radio" class="btn-check" name="interaction" id="btnradio17" autocomplete="off" value="2" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio17">Disagree</label>
    
                <input type="radio" class="btn-check" name="interaction" id="btnradio18" autocomplete="off" value="3" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio18">Neutral</label>
            
                <input type="radio" class="btn-check" name="interaction" id="btnradio19" autocomplete="off" value="4" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio19">Agree</label>
            
                <input type="radio" class="btn-check" name="interaction" id="btnradio20" autocomplete="off" value="5" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio20"> Strongly Agree</label>
            </div>

            <h5>The instructor was accessible and responsive to student inquiries and concerns.</h5>
            <br></br>
            <div class="feedback-questions btn-group" role="group" aria-label="feedback">
                
                <input type="radio" class="btn-check" name="feedback" id="btnradio21" autocomplete="off" value="1" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio21">Strongly Disagree</label>
    
                <input type="radio" class="btn-check" name="feedback" id="btnradio22" autocomplete="off" value="2" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio22">Disagree</label>
    
                <input type="radio" class="btn-check" name="feedback" id="btnradio23" autocomplete="off" value="3" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio23">Neutral</label>
            
                <input type="radio" class="btn-check" name="feedback" id="btnradio24" autocomplete="off" value="4" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio24">Agree</label>
            
                <input type="radio" class="btn-check" name="feedback" id="btnradio25" autocomplete="off" value="5" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio25"> Strongly Agree</label>
            </div>

            <h5>The course was well-organized and followed a logical structure.</h5>
            <br></br>
            <div class="feedback-questions btn-group" role="group" aria-label="organization">
                
                <input type="radio" class="btn-check" name="organization" id="btnradio26" autocomplete="off" value="1" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio26">Strongly Disagree</label>
    
                <input type="radio" class="btn-check" name="organization" id="btnradio27" autocomplete="off" value="2" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio27">Disagree</label>
    
                <input type="radio" class="btn-check" name="organization" id="btnradio28" autocomplete="off" value="3" onChange={handleChange} ></input>
                <label class="btn btn-outline-primary" for="btnradio28">Neutral</label>
            
                <input type="radio" class="btn-check" name="organization" id="btnradio29" autocomplete="off" value="4" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio29">Agree</label>
            
                <input type="radio" class="btn-check" name="organization" id="btnradio30" autocomplete="off" value="5" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio30"> Strongly Agree</label>
            </div>

            <h5>The course content was relevant to my academic or career goals.</h5>
            <br></br>
            <div class="feedback-questions btn-group" role="group" aria-label="relevance">
                
                <input type="radio" class="btn-check" name="relevance" id="btnradio31" autocomplete="off" value="1" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio31">Strongly Disagree</label>
    
                <input type="radio" class="btn-check" name="relevance" id="btnradio32" autocomplete="off" value="2" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio32">Disagree</label>
    
                <input type="radio" class="btn-check" name="relevance" id="btnradio33" autocomplete="off" value="3" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio33">Neutral</label>
            
                <input type="radio" class="btn-check" name="relevance" id="btnradio34" autocomplete="off" value="4" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio34">Agree</label>
            
                <input type="radio" class="btn-check" name="relevance" id="btnradio35" autocomplete="off" value="5" onChange={handleChange}></input>
                <label class="btn btn-outline-primary" for="btnradio35"> Strongly Agree</label>
            </div>
        </div>

        
        <label class="feedback-freeform input-group-text" for="textArea">What additional comments or suggestions do you have about this course?</label>
        <textarea class="form-control" name="free_form" id="textArea" aria-label="With textarea" onChange={handleChange}></textarea>

        {showWarning && <div className="alert alert-warning" role="alert">Please select ratings for all categories.</div>}
        {/*Tenary operator in data-bs-modal ensures that user must fill in all radio boxes before submitting */}
        {/* <button className="submitFeedbackBtn btn btn-primary" type="submit" data-bs-dismiss={allRadioChecked() ? "modal" : ""}>Submit</button> */}
        <button type="button" className="resetFeedbackBtn btn btn-danger" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default CourseFeedbackForm;