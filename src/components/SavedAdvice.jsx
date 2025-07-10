import { useState, useEffect } from "react"; // useState will rerender the list every time a new piece of advice is saved

function DisplaySavedAdv() {
  const [savedAdvice, setSavedAdvice] = useState([]);

  function handleDelete(removeIndex) {
    // this will filter through the array and keep the ones that don't match deleted ...
    const updatedList = savedAdvice.filter(
      (item, index) => index !== removeIndex
    );
    setSavedAdvice(updatedList); // updates the list after deletion
    localStorage.setItem("savedAdvArr", JSON.stringify(updatedList)); // now accessible in local storage as a string to get later
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedAdvArr")) || [];
    setSavedAdvice(saved);
  }, []);
  // updated for some conditional rendering outside the return...
  let listContent;
  if (savedAdvice.length === 0) {
    listContent = (
      <p>
        This list is currently empty! Advice: Go save something and come back.
      </p>
    );
  } else {
    listContent = savedAdvice.map((advice, index) => {
      return (
        <li key={index}>
          {advice}
          <button onClick={() => handleDelete(index)}>delete</button>{" "}
          {/*  the button goes in the map so it sits next to the corresponding index */}
        </li>
      );
    });
  }

  return (
    <div>
      <h1> Saved Reminders</h1>
      <h3>Your Favorite Reminders Stored Here</h3>
      <ul>{listContent}</ul>
    </div>
  );
}
export default DisplaySavedAdv;
