import React from 'react';
import useCharacters from '../hooks/useCharacters';
import './CharactersList.css';


function CharactersList() {

    const {error, loading, data} = useCharacters();
    if (loading) return <div>Spinner..</div>;

    if (error) return <div>Somethinig went wrong</div>

    return (
        <div className='CharactersList'>
            {data.characters.results.map(character => {
                return <div>
                            <img src={character.image} alt='character'/>
                            <h2>{character.name}</h2>
                        </div>
            })}
        </div>
    )
}

export default CharactersList