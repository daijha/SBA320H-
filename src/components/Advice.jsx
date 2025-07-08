import { useState, useEffect } from "react";// may noe need use effect here 

function Advice() {
  const [adv, setAdv] = useState(null); // using null instead of empty string helps the logical and in the return.

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

  return (
    <div>
      <button
        onClick={() => {
          getAdvice();
        }}
      >
        Tell me something
      </button>
      {adv && <p>Here is what you should know: <br/> {adv}</p>}
    </div>
  );
}
export default Advice;
