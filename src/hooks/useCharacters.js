import {useQuery, gql} from '@apollo/client'

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
export default function useCharacters() {
    const {error, loading, data} = useQuery(GET_CHARACTERS);
    return {
        error,
        data,
        loading
    }
}