import Image from "next/image"
import { useState, useEffect } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"

import {FaPlay} from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/solid"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"

interface Props {
  netflixOriginals: Movie[]
}

function Banner({netflixOriginals}:Props) {
  const [showModal, setShowModal] =useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

const [movie, setMovie] = useState<Movie | null>(null)

// const myLoader=({src})=>{
//   return `${baseUrl}${movie?.backdrop_path || movie?.poster_path}`;
// }

useEffect(() => {
  setMovie(
    netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
  )
}, [netflixOriginals])

// console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:w-[120vh] md:w-full">
        <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
            <Image  
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
            layout='fill'
            objectFit="cover"
            />
        </div>

        <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-x-2xl lg:text-l 
                      text-shadow-md ">
          {movie?.overview}
        </p>

        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />Play
            </button>
          <button className="bannerButton bg-[gray]/70"
          onClick={() => {
            setShowModal(true)
            setCurrentMovie(movie)
          }}>
            More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/>
          </button>
        </div>
    </div>
  )
}

export default Banner