import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";
export const MovieList = () => {
  const{data:movies} = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=00c169398dd18058872947de2d3d3a0e");


  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>


          ))}
          
        </div>

      </section>
    </main>
  )
}
