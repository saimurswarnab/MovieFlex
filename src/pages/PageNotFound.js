import { Link } from "react-router-dom"
import PageNotFoundImage from "../assets/images/pagenotfound.png"
import { Button } from "../components/Button"
import { useEffect } from "react"
export const PageNotFound = () => {


  useEffect(()=>{
    document.title = `Page Not Found/ Movieflex`;

  });



  
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <h1 class="text-9xl font-black text-gray-200 dark:text-gray-700">404</h1>
          <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Uh-oh!</p>
          <p class="mt-4 text-gray-500 dark:text-gray-400">We can't find that page.</p>

        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
           <Button>Back to MovieFlex</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
