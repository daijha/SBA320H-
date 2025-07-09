import { useState , useEffect} from "react"// useState will rerender the list every time a new piece of advice is saved 
import Advice from "./Advice";

function DisplaySavedAdv(){
    const [savedAdvice, setSavedAdvice] = useState([]);

useEffect(()=>{
     const saved = JSON.parse(localStorage.getItem("savedAdvArr"));
    setSavedAdvice(saved)
}, []);
    

    return(
        <div>
              <ul>
  {savedAdvice.map((advice, index) => {
    return <li key = {index}> {advice}</li>})}
        </ul>
      
        </div>
    )
}
export default DisplaySavedAdv