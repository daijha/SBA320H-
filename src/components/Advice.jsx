import { useState, useEffect } from "react"; // may noe need use effect here

function Advice() {
  const [adv, setAdv] = useState(null); // using null instead of empty string helps the logical and in the return.
  //   const [saved, setSaved] = useState([]); // empty array to store saved advice.
  async function getAdvice() {
    try{
    let url = "https://api.adviceslip.com/advice"; // returns random advice slip as a slip object
    const response = await fetch(url);
    const data = await response.json();
    setAdv(data.slip.advice);
    console.log("advice:", data.slip.advice); // logs advice to console
  }catch{
    console.log("error")
    setAdv("something wrong happened.")
  }
    }

  function handleSave() {
    const existingSaved = JSON.parse(localStorage.getItem("savedAdvArr")) || [];
if(existingSaved.includes(adv)){
  console.log(" This is already saved!")
return;
}else{
    // needs to load saved advice first or operator is used to make sure if its null its empty
    const newSavedList = [...existingSaved, adv]; // put in const to make it easier to use local storage  adds the new adv to list of given ones
    localStorage.setItem("savedAdvArr", JSON.stringify(newSavedList));
  }}

const [btnTxtContent, setBtnTxtContent] = useState("Tell me Something ")

  return (
    <div>
      <h1>Sage Reminders </h1>
      <h3>Click the Button Below for Sage Guidance </h3>
      <button
        onClick={() => {
          getAdvice();
           {setBtnTxtContent("Tell me something else")}
        }}
      >
      {btnTxtContent}
      </button>
      {adv && (
        <div>
          <h4>
            Here is what you should know: 
          </h4>
          <p>
            {adv}
          </p>
          <button onClick={handleSave}>Save this Reminder</button>
        </div>
      )}
    </div>
  );
}
export default Advice;
