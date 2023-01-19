const callData = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}




const fetchData = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    try {
        const getData = await fetch(url)
        const json = await getData.json()
        console.log(json)
    }
    catch (error) {
        console.log(error)
    }
}