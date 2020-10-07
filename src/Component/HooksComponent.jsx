import React, { useState, useEffect } from 'react';
import DisplayMovie from './DisplayMovie.jsx';



const url = `http://www.omdbapi.com/?apikey=230afcff&s=Marvel&type=movie`;

function Hooks() {
    const [movie, setmovie] = useState([]);
    const [allmovie, setAllMovie] = useState([]);


    useEffect(() => {
        getResult()
    }, []);

    const getResult = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAllMovie(data.Search);
                setmovie(data.Search)
            });
    }

    const setResult = (data, bool) => {
        if (bool) {
            if (data.length > 0) {
                setmovie(data)
            } else {
                setmovie(allmovie)
            }
        } else {
            setmovie([])
        }

    }




    return (
        <div>
            <DisplayMovie moviedata={movie} setResult={setResult} />
        </div>
    )
}

export default Hooks;