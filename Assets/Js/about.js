const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad5821323emsh1310a3d7262579fp1527fejsn27b1dfa1e2b9',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};
fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));