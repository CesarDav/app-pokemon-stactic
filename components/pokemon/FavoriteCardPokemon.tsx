import { Grid, Card } from "@nextui-org/react"
import { useRouter } from 'next/router';

interface Props {
    idPokemon: number
}

export function FavoriteCardPokemon({ idPokemon }: Props) {
    const router = useRouter();
    const onClick = () => router.push(`/pokemon/${idPokemon}`)


    return (
        <Grid onClick={onClick} xs={6} sm={3} md={2} xl={1} key={idPokemon}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
                    width={'100%'}
                    height={140}
                />

            </Card>
        </Grid>
    )
}