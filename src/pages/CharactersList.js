import React from 'react';
import {useQuery, gql} from '@apollo/client'
import './CharactersList.css';

const GET_CHARACTERS = gql`
query {
    characters {
        results {
            id
            name
            image
        }
    }
}
`

function CharactersList() {

    const {error, loading, data} = useQuery(GET_CHARACTERS);

    console.log({error, loading, data});

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