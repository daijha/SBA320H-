import { useState, useEffect } from "react"; // useState will rerender the list every time a new piece of advice is saved

function DisplaySavedAdv() {
  const [savedAdvice, setSavedAdvice] = useState([]);

  function handleDelete(removeIndex) {
    // this will filter through the array and keep the ones that don't match deleted ...
    const updatedList = savedAdvice.filter(
      (item, index) => index !== removeIndex
    );
    setSavedAdvice(updatedList); // updates the list after deletion
    localStorage.setItem("savedArr", JSON.stringify(updatedList)); // now accessible in local storage as a string to get later
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedAdvArr")) || [];
    setSavedAdvice(saved);
  }, []);

  return (
    <div>
      <h1>Your Favorite pieces of wisdom</h1>
      <h3>
        add some kind of description here and change that h1 content is bad{" "}
      </h3>
      <ul>
        {savedAdvice.map((advice, index) => {
          return (
            <li key={index}>
              {" "}
              {advice}{" "}
              <button onClick={() => handleDelete(index)}>delete</button> {/*  the button goes in the map so it sits next to the corresponding index */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default DisplaySavedAdv;
