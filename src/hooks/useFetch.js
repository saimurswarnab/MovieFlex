import { useEffect,useState } from "react"

export const useFetch = (apiPath) => {
    const [data,setData] =useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=00c169398dd18058872947de2d3d3a0e`
    useEffect(()=>{
        async function fetchMovies() {
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
          
        }
        fetchMovies();
    
      },[url])
  return {data}
}

