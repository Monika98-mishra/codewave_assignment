import React from 'react';
import './DisplayMovie.css';
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

function DisplayCity({ moviedata, fetchMore, currentPage, totalpages, search, updateSearch }) {

    const renderlist = (moviedata) => {
        if (moviedata.length > 0) {
            console.log(totalpages - currentPage !== 0);
            return (
                <InfiniteScroll
                    dataLength={moviedata.length}
                    next={fetchMore}
                    hasMore={totalpages - currentPage !== 0}
                    loader={<h4>Loading...</h4>}
                > <div className="cards">
                        {

                            moviedata.map((item, index) => {
                                return <div key={index} className="card">
                                    <img src={item.Poster} width="150" alt={item.Title} />
                                    <h4><Link to={`/DetailsMovie/${item.imdbID}`}>{item.Title}</Link></h4>
                                </div>


                            })
                        }
                    </div>
                </InfiniteScroll>
            )

        } else {
            return <p>No data found</p>
        }
    }

    return (
        <div >
            <center>
                <table className="titlebar">
                    <tbody>
                        <tr>
                            <td>
                                Search Movie
                            </td>
                            <td>
                                <input type="text" placeholder="SearchMovie" aria-label="search" value={search} onChange={updateSearch} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>

            {renderlist(moviedata)}

        </div>
    )
}

export default DisplayCity;