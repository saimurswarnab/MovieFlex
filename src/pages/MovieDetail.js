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

        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>
          <p className="my-4">{movie.overview}</p>
          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre)=>(
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
              ))}
            </p>
          ) : "" }
        </div>
      </section>
    </main>
  )
}
