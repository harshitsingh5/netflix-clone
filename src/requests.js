const API_KEY = "86d32f66b2e6e65ee6374facc9a3dd44";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks-213`, 
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres-35`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres-28`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with genres%-27`, 
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres%-10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres-99`
}

export default requests;