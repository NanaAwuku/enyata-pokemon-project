export const ExerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a604926b6msh1f165398b17a07bp1e5459jsn9d30d9ab13ea' ,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


export const fetchData = async (url, options)=>{
    const response = await fetch (url, options)
    const data = await response.json()
    return data

}