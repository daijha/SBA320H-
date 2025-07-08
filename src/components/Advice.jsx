import { useState, useEffect } from "react"


function Advice(){
const [adv , setAdv]= useState(" ")
useEffect(() => {
    async function getAdvice() {
        let url = 'https://api.adviceslip.com/advice'// returns random advice slip as a slip object
        const response = await fetch(url)
        const data = await response.json()
        setAdv(data.slip.advice)
     console.log("advice:", data.slip.advice)// logs advice to console
    } 
      getAdvice()
       
} , [])

return (
  
<div>
    <p>
here is your advice: {adv}
    </p>
</div>
)
} 
export default Advice
