import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export const MovieDetail = () => {
  const params = useParams();
  const[data,setData] = useState({});

  useEffect(()=>{
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=00c169398dd18058872947de2d3d3a0e`);
      const json = await response.json();
      setData(json);
      
    }
    fetchMovie();

  },[])
  return (
    <main>
      <section>
        <div></div>
        <div></div>
      </section>
    </main>
  )
}
