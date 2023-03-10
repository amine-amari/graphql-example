import React from 'react';
import { useParams } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';
import './Character.css';

export default function Character() {

    const {id} = useParams();

    const {data, loading, error} = useCharacter(id);

    if (loading) return <div>Spinner..</div>;

    if (error) return <div>Somethinig went wrong</div>

    return (
        <div className='Character'>
            <img src={data.character.image} width={750} height={750} alt='character'/>
            <div className='Character-content'>
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className='Character-episode'>
                    {data.character.episode.map((episode) => {
                        return <div>
                            {episode.name} - <b>{episode.episode}</b>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
