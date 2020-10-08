import React, { useState, useEffect } from 'react';
import DisplayMovie from './DisplayMovie.jsx';


function Hooks() {
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpages, setTotalpages] = useState(0);
    const [search, setSearch] = useState('Marvel');

    useEffect(() => {
        getResult()
    }, [search, page]);
 
    const getResult = async () => {
        const url = `http://www.omdbapi.com/?apikey=230afcff&s=${search}&type=movie&page=${page}`;
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if(data.Response == "True") {
                    setmovie([...movie, ...data.Search]);
                    console.log(Math.ceil(Number(data.totalResults) / 10));
                    setTotalpages(Math.ceil(Number(data.totalResults) / 10));
                } else {
                    setmovie([]);
                }
            });
    }

    const fetchMore = async () => {
        let _newpage = page + 1;
        setpage(_newpage);
        await getResult();
    } 

    const updateSearch = async (event) => {
        setmovie([]);
        setpage(1);
        setSearch(event.target.value);
        await getResult();
    }

    return (
        <div>
            <DisplayMovie
                fetchMore={fetchMore}
                moviedata={movie}
                totalpages={totalpages}
                currentPage={page}
                search={search}
                updateSearch={updateSearch}
            />
        </div>
    )
}

export default Hooks;