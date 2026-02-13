import React from "react";

/**
 * Asking component for proposing the Valentine's Day question.
 *
 * @param {string} gif - The URL or import path of the chosen gif.
 * @param {string} altText - The alt text for the displayed gif.
 * @param {function} handleAccept - Callback function for accepting the proposal.
 * @param {function} handleReject - Callback function for rejecting the proposal.
 * @param {string} noButtonText - The text to be displayed on the rejection button.
 * @returns {JSX.Element} JSX element representing the Asking component.
 */
const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => (
  <>
    {/* Displaying the chosen gif with alt text */}
    <img className="App-gif" src={gif} alt={altText} />
    {/* Asking the special question with personalized name */}
    <p className="App-text">Safa, Every year with you feels like compound interest —
it just keeps getting better.

So today I’m asking you again…

Will you keep choosing me,
like I choose you,
every single day? Will you be my Valentine?</p>
    <div>
      {/* Button for accepting the proposal */}
      <button className="App-button" onClick={handleAccept}>
        Yes
      </button>
      {/* Button for rejecting the proposal with dynamic text */}
      <button 
  onMouseEnter={(e) => {
    e.target.style.position = "absolute";
    e.target.style.top = Math.random() * 400 + "px";
    e.target.style.left = Math.random() * 400 + "px";
  }}
>
  No
</button>
    </div>
  </>
);

export default Asking;
