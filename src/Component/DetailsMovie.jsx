import React, { useState, useEffect } from 'react';
import DetailsMovieDisplay from './DetailsMovieDisplay';

function DetailsMovie(props) {


    const [moviedetails, setMoviedetails] = useState({})

    useEffect(() => {
        getSingleData(props.match.params.id);
    }, [])

    const getSingleData = (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=230afcff`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMoviedetails(data)
            })
    }

    return (
        <div>
            <center>

                <DetailsMovieDisplay movie_data_details={moviedetails} />
            </center>
        </div>
    )
}

export default DetailsMovie;




