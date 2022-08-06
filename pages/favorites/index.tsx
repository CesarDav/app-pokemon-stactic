import { useEffect, useState } from "react"
import { NextPage } from "next"
import { Layout } from "components/layouts"
import { NoFavorites } from "components/ui"
import { localFavorites } from 'utils';
import { FavoritesPokemons } from "components/pokemon/FavoritesPokemons";


const FavoritesPage: NextPage = () => {
    const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([])

    useEffect(() => {
        setFavoritesPokemon(localFavorites.getPokemons())
    }, [])

    return (
        <Layout title="Pokemon - Favorites">
            {favoritesPokemon.length === 0
                ? (
                    <NoFavorites />
                ) : (
                    <FavoritesPokemons idPokemons={favoritesPokemon} />
                )
            }
        </Layout>
    )
}


export default FavoritesPage
