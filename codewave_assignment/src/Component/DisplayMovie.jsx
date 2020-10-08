import React, { useState } from 'react';
import { useMemo } from 'react';
import './DisplayMovie.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function DisplayCity({ moviedata, setResult, fetchMore, currentPage, totalpages }) {

    console.log(moviedata, currentPage, totalpages);

    const [search, setSearch] = useState("");


    const renderlist = (moviedata) => {
        if (moviedata.length > 0) {
            return (
                moviedata.map((item, index) => {
                    return <div className="cards">
                        <div key={index} className="card">
                            {console.log(item)}
                            <img src={item.Poster} width="150" alt={item.Title} />
                            <h4><a href="#" ><Link to={`/DetailsMovie/${item.imdbID}`}>{item.Title}</Link></a></h4>
                        </div>

                    </div>
                })
            )

        } else {
            return <p>No data found</p>
        }
    }

    const changefn = (e) => {
        setSearch(e.target.value);
        if (e.target.value) {
            let filteredData = moviedata.filter(a => a.Title.toLowerCase().includes(search));
            filteredData.length > 0 ? setResult(filteredData, true) : setResult(filteredData, false);
        } else {
            setResult([], true);
        }

    }

    // fetchMore


    return (
        <div >
            <InfiniteScroll
                dataLength={moviedata.length}
                next={fetchMore}
                hasMore={totalpages - currentPage !== 0}
                loader={<h4>Loading...</h4>}
            ></InfiniteScroll>
            <center>
                {/* <h2>Search Movie</h2> */}
                <table className="titlebar">
                    <tbody>
                        <tr>
                            <td>
                                Search Movie
                            </td>
                            <td>
                                <input type="text" placeholder="SearchMovie" aria-label="search" value={search} onChange={changefn} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
            <div className="cards">
                {renderlist(moviedata)}
            </div>
        </div>
    )
}

export default DisplayCity;