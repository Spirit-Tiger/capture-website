import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
import { MovieState } from "../movieState";

import { Details, HeadLine, Awards, AwardStyle, ImageDisplay } from "../styles";

const MovieDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [movies , setMovies] = useState(MovieState);
    const [movie , setMovie] = useState(null);


    useEffect(() =>{
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
        console.log('my-change');
    }, [movies, url]);
    return (
        <>
        {movie && (
            <Details>
                <HeadLine>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt={movie.title} />
                </HeadLine>
                <Awards>
                    {movie.awards.map((award) => (
                       <Award title={award.title} description={award.description} key={award.title}/>
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="secondaryImg" />
                </ImageDisplay>
            </Details>
            )}
        </>
    );
};

//Award Component

const Award = ({title,description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
};

export default MovieDetail