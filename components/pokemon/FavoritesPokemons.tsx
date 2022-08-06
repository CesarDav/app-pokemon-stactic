import { Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "./FavoriteCardPokemon"


interface Props {
    idPokemons: number[];
}

export function FavoritesPokemons({ idPokemons }: Props) {
    return (
        <Grid.Container gap={2}  >
            {idPokemons.map(id => <FavoriteCardPokemon idPokemon={id} key={id} />)}
        </Grid.Container>
    )

}