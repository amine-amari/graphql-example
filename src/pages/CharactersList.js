import React from 'react';
import { Link } from 'react-router-dom';
import useCharacters from '../hooks/useCharacters';
import './CharactersList.css';


function CharactersList() {

    const {error, loading, data} = useCharacters();
    if (loading) return <div>Spinner..</div>;

    if (error) return <div>Somethinig went wrong</div>

    return (
        <div className='CharactersList'>
            {data.characters.results.map(character => {
                return <Link to={`/${character.id}`}>
                            <img src={character.image} alt='character'/>
                            <h2>{character.name}</h2>
                        </Link>
            })}
        </div>
    )
}

export default CharactersList