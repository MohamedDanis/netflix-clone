import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState()
useEffect(() => {
    axios.get(props.url).then((response)=>{
        console.log(response.data);
        setMovies(response.data.results)
    })
}, [])
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data);
        if(response.data.results.lenght!==0){
            setUrlId(response.data.results[0])
        }else{
            console.log('trailer not available..!');
        }
    })
  }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            
            <div className="posters">
            {movies && movies.map((obj)=>{
                return(

                                <img onClick={()=>handleMovie(obj.id)}  className={props.isSmall?'smallPoster':"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="p" />
                
                )
            })}
            
            
            </div>
           {urlId &&  <Youtube videoId={urlId.key} opts={opts}/>}

        </div>
    )
}

export default Rowpost
