import React, { useState, useEffect } from 'react';
import DisplayMovie from './DisplayMovie.jsx';





function Hooks() {
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [allmovie, setAllMovie] = useState([]);
    const [totalpages, setTotalpages] = useState(0);


    useEffect(() => {
        getResult(page)
    }, []);

    const getResult = async (page) => {
        const url = `http://www.omdbapi.com/?apikey=230afcff&s=Marvel&type=movie&page=${page}`;
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAllMovie([...allmovie ,data.Search]);
                setmovie([...movie, data.Search]);
                setTotalpages(Math.floor(Number(data.totalResults)/10));
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

    const fetchMore = () => {
        let _newpage = page+1;
            setpage(_newpage);
            getResult(_newpage);
   
    }


    return (
        <div>
            <DisplayMovie moviedata={movie} setResult={setResult} fetchMore={fetchMore} totalpages={totalpages}
            currentPage={page} />
        </div>
    )
}

export default Hooks;