useEffect(() => {
    async function getEmployeeData() {
        let url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url)
        const data = await response.json()
        setAdvice(data)
    }

return{}
}, [])