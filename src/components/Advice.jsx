import { useState, useEffect } from "react"; // may noe need use effect here

function Advice() {
  const [adv, setAdv] = useState(null); // using null instead of empty string helps the logical and in the return.
  const [saved, setSaved] = useState([]); // empty array to store saved advice.
  async function getAdvice() {
    let url = "https://api.adviceslip.com/advice"; // returns random advice slip as a slip object
    const response = await fetch(url);
    const data = await response.json();
    setAdv(data.slip.advice);
    console.log("advice:", data.slip.advice); // logs advice to console
  }
  //   useEffect(() => {
  //     getAdvice();
  //   }, []);// rendered on the mount and i don't want that ...
  function handleSave() {
    const newSavedList = [...saved, adv]; // put in const to make it easier to use local storage  adds the new adv to list of given ones
    setSaved(newSavedList); // the set runs the function to update the array
    localStorage.setItem("savedAdvArr", JSON.stringify(newSavedList));
  }
  useEffect(() => {
    console.log(saved); // its async so now ill see it stored in the array in real time.
  }, [saved]); //only show when saved is being used

  return (
    <div>
      <button
        onClick={() => {
          getAdvice();
        }}
      >
        Tell me something
      </button>
      {adv && (
        <div>
          <p>
            Here is what you should know: <br /> {adv}
          </p>
          <button onClick={handleSave}>Save this Advice</button>
        </div>
      )}
    </div>
  );
}
export default Advice;
