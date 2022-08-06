import { pokeApi } from "api"
import { PokemonDetailData } from "interfaces"

export const getPokemonInfo = async (nameOrId: string) => {

    const { data } = await pokeApi.get<PokemonDetailData>(`/pokemon/${nameOrId}`)

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }

}