import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Backup from"../assets/images/backup.png"

export const MovieDetail = () => {
  const params = useParams();
  const[movie,setMovie] = useState({});
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup;

  useEffect(()=>{
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=00c169398dd18058872947de2d3d3a0e`);
      const json = await response.json();
      setMovie(json);
      
    }
    fetchMovie();

  },[])
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title}/>

        </div>
        <div></div>
      </section>
    </main>
  )
}
