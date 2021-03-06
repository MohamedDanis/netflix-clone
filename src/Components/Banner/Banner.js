import React,{ useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import { baseUrl } from '../../constants/constants'
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[Math.floor(Math.random()*11)])
        })
    }, [])
    console.log(movie);
    return (
        <div className="banner"
        style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path:""})`}}
        >
            <div className="content" >
                <h1 className="title">{movie ? movie.title : "title"}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>

            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
