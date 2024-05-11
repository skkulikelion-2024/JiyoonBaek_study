import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie"

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();


    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovie(json);
        //console.log(json);
    };

    useEffect(() => {
        getMovie();
        
    }, [])
    
    
    
    return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
                <h1>Details</h1>
              
            </div>
            )}
  
        </div>
      );
}

export default Detail;